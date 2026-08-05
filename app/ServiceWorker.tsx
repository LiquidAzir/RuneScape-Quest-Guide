"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker. Nothing renders - this exists so the
 * guide keeps working on a phone with no signal, which is half the point of
 * having it open next to the game.
 */
export default function ServiceWorker() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Offline support is a bonus; a failed registration shouldn't surface.
      });
    };
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
