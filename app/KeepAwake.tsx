"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Sentinel = { released: boolean; release: () => Promise<void> };
type WakeLockNavigator = Navigator & {
  wakeLock?: { request: (type: "screen") => Promise<Sentinel> };
};

/**
 * Holds a screen wake lock so the phone doesn't dim mid-quest while the guide
 * is open beside the game. The browser drops the lock whenever the tab is
 * hidden, so it's reacquired on the way back.
 */
export default function KeepAwake() {
  const [supported, setSupported] = useState(false);
  const [on, setOn] = useState(false);
  const sentinel = useRef<Sentinel | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSupported(Boolean((navigator as WakeLockNavigator).wakeLock));
  }, []);

  const acquire = useCallback(async () => {
    const api = (navigator as WakeLockNavigator).wakeLock;
    if (!api) return false;
    try {
      sentinel.current = await api.request("screen");
      return true;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (!on) return;
    const reacquire = () => {
      if (document.visibilityState === "visible" && sentinel.current?.released) {
        void acquire();
      }
    };
    document.addEventListener("visibilitychange", reacquire);
    return () => document.removeEventListener("visibilitychange", reacquire);
  }, [on, acquire]);

  const toggle = useCallback(async () => {
    if (on) {
      await sentinel.current?.release().catch(() => {});
      sentinel.current = null;
      setOn(false);
      return;
    }
    if (await acquire()) setOn(true);
  }, [on, acquire]);

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      title="Stop the screen dimming while you follow a guide"
      className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 transition-colors ${
        on
          ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/40"
          : "text-zinc-400 ring-zinc-700 active:bg-zinc-800"
      }`}
    >
      {on ? "Screen on" : "Keep screen on"}
    </button>
  );
}
