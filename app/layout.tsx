import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import KeepAwake from "./KeepAwake";
import ServiceWorker from "./ServiceWorker";

export const metadata: Metadata = {
  title: "OSRS Quest Guide",
  description:
    "An interactive Old School RuneScape quest guide with checkable step-by-step walkthroughs and exact travel routes. Designed to be opened side-by-side with OSRS Mobile.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "OSRS Quests",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-900/95 pt-[env(safe-area-inset-top)] backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
            <Link
              href="/"
              className="truncate text-lg font-semibold tracking-tight"
            >
              OSRS Quest Guide
            </Link>
            <KeepAwake />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-500">
          Walkthroughs are original content. Quest data sourced from the{" "}
          <a
            href="https://oldschool.runescape.wiki/w/Quests/List"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-300"
          >
            OSRS Wiki
          </a>
          . Not affiliated with Jagex.
        </footer>
        <ServiceWorker />
      </body>
    </html>
  );
}
