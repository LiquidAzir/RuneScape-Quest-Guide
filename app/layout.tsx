import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSRS Quest Guide",
  description:
    "An interactive Old School RuneScape quest guide with checkable step-by-step walkthroughs. Designed to be opened side-by-side with OSRS Mobile.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1f2937",
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
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              OSRS Quest Guide
            </Link>
            <span className="text-xs text-zinc-400">
              Tap a step to check it off
            </span>
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
      </body>
    </html>
  );
}
