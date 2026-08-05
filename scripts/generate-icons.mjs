// Renders the app icons as PNGs so "Add to Home Screen" gets a real icon.
// Hand-rolled rasteriser + PNG encoder to avoid pulling in an image dependency
// for three static files. Run with: node scripts/generate-icons.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const BG = [16, 185, 129]; // emerald-500
const BG_DARK = [4, 120, 87]; // emerald-700, for the gradient
const FG = [6, 46, 34]; // near-black emerald, for the tick

/** Distance from point p to line segment ab. */
function segmentDistance(px, py, ax, ay, bx, by) {
  const abx = bx - ax;
  const aby = by - ay;
  const apx = px - ax;
  const apy = py - ay;
  const lenSq = abx * abx + aby * aby;
  const t = lenSq === 0 ? 0 : Math.max(0, Math.min(1, (apx * abx + apy * aby) / lenSq));
  const dx = px - (ax + t * abx);
  const dy = py - (ay + t * aby);
  return Math.hypot(dx, dy);
}

/** Signed distance to a rounded rectangle centred in the canvas. */
function roundedRectDistance(px, py, halfW, halfH, radius) {
  const qx = Math.abs(px) - (halfW - radius);
  const qy = Math.abs(py) - (halfH - radius);
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  return outside + Math.min(Math.max(qx, qy), 0) - radius;
}

function blend(dst, src, alpha, offset) {
  for (let c = 0; c < 3; c++) {
    dst[offset + c] = Math.round(dst[offset + c] * (1 - alpha) + src[c] * alpha);
  }
  dst[offset + 3] = Math.round(dst[offset + 3] * (1 - alpha) + 255 * alpha);
}

/** Anti-aliased coverage for a signed distance, 1px feather. */
function coverage(distance) {
  return Math.max(0, Math.min(1, 0.5 - distance));
}

function render(size, { maskable }) {
  const rgba = new Uint8Array(size * size * 4); // starts fully transparent
  const centre = size / 2;
  // A maskable icon gets cropped to a circle by the OS, so it bleeds to the
  // edges and keeps the tick inside the safe zone.
  const halfPlate = maskable ? size : size * 0.5;
  const plateRadius = maskable ? 0 : size * 0.22;
  const tickScale = maskable ? 0.58 : 0.72;

  // Tick geometry, in units relative to the icon centre.
  const s = size * tickScale;
  const stroke = s * 0.16;
  const p1 = [centre - s * 0.3, centre + s * 0.02];
  const p2 = [centre - s * 0.08, centre + s * 0.24];
  const p3 = [centre + s * 0.32, centre - s * 0.25];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const offset = (y * size + x) * 4;

      const plate = coverage(
        roundedRectDistance(px - centre, py - centre, halfPlate, halfPlate, plateRadius),
      );
      if (plate > 0) {
        // Vertical gradient so the icon doesn't read as a flat blob.
        const t = y / size;
        const colour = [
          Math.round(BG[0] * (1 - t) + BG_DARK[0] * t),
          Math.round(BG[1] * (1 - t) + BG_DARK[1] * t),
          Math.round(BG[2] * (1 - t) + BG_DARK[2] * t),
        ];
        blend(rgba, colour, plate, offset);
      }

      const tick = coverage(
        Math.min(
          segmentDistance(px, py, p1[0], p1[1], p2[0], p2[1]),
          segmentDistance(px, py, p2[0], p2[1], p3[0], p3[1]),
        ) - stroke / 2,
      );
      if (tick > 0) blend(rgba, FG, tick, offset);
    }
  }

  return rgba;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encodePng(rgba, size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: RGBA
  // 10-12: compression, filter, interlace all 0

  // Each scanline is prefixed with filter type 0 (none).
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 4 + 1);
    raw[rowStart] = 0;
    Buffer.from(rgba.buffer, y * size * 4, size * 4).copy(raw, rowStart + 1);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync(OUT_DIR, { recursive: true });

const targets = [
  { file: "icon-192.png", size: 192, maskable: false },
  { file: "icon-512.png", size: 512, maskable: false },
  { file: "icon-maskable-512.png", size: 512, maskable: true },
  { file: "apple-touch-icon.png", size: 180, maskable: true },
];

for (const target of targets) {
  const png = encodePng(render(target.size, target), target.size);
  writeFileSync(join(OUT_DIR, target.file), png);
  console.log(`wrote public/${target.file} (${png.length} bytes)`);
}
