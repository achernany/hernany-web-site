import { useState, useEffect, useRef } from "react";
import { useI18n } from "../../i18n";
import "./LotoBolaGate.css";

// ─── Constants ────────────────────────────────────────────────────────────────
const SESSION_KEY   = "lb_access_v1";
const SECRET        = "lb2025";
const SLOTS         = SECRET.length;
const FADE_OUT_MS   = 500; // must match --lb-fade-out in CSS

// ─── Component ────────────────────────────────────────────────────────────────
/**
 * LotoBolaGate — access gate for the LotoBola case study.
 *
 * Renders a 1px sentinel at the top of cs-case-page. IntersectionObserver
 * activates the overlay the moment the sentinel exits the viewport (first scroll).
 * The overlay fades in, locks scroll, and auto-unlocks on correct 6-char OTP.
 * Unlocking triggers a fog-dissipating fade-out before the component clears.
 * Session survives page refreshes (sessionStorage); closing the tab resets it.
 */
export function LotoBolaGate() {
  const { t }                           = useI18n();
  const [unlocked, setUnlocked]         = useState(() => sessionStorage.getItem(SESSION_KEY) === "true");
  const [active, setActive]             = useState(false);
  const [leaving, setLeaving]           = useState(false);
  const [otp, setOtp]                   = useState<string[]>(() => Array(SLOTS).fill(""));
  const [error, setError]               = useState(false);
  const [shake, setShake]               = useState(false);
  const sentinelRef                     = useRef<HTMLDivElement>(null);
  const inputRefs                       = useRef<Array<HTMLInputElement | null>>([]);

  // Activate gate on first scroll via IntersectionObserver.
  // IO fires on observe() with current state, so a restored scroll position
  // (e.g. browser session restore) also activates the gate immediately.
  useEffect(() => {
    if (unlocked || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setActive(true); },
      { threshold: 0 },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [unlocked]);

  // Lock scroll while gate is visible.
  // Never touches overflow/height/position — those remove the scrollbar and cause
  // a ~17px layout jump. Instead, we intercept the input events directly.
  useEffect(() => {
    if (!active || unlocked) return;

    const SCROLL_KEYS = new Set([
      "Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End",
    ]);

    const blockScroll = (e: Event) => e.preventDefault();
    const blockKeys   = (e: KeyboardEvent) => {
      // Allow typing inside the OTP inputs
      if (e.target instanceof HTMLInputElement) return;
      if (SCROLL_KEYS.has(e.code)) e.preventDefault();
    };

    window.addEventListener("wheel",     blockScroll, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });
    window.addEventListener("keydown",   blockKeys,   { passive: false });

    return () => {
      window.removeEventListener("wheel",     blockScroll);
      window.removeEventListener("touchmove", blockScroll);
      window.removeEventListener("keydown",   blockKeys);
    };
  }, [active, unlocked]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const unlock = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setLeaving(true);
    setTimeout(() => setUnlocked(true), FADE_OUT_MS);
  };

  const fail = () => {
    setError(true);
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setError(false);
      setOtp(Array(SLOTS).fill(""));
      inputRefs.current[0]?.focus();
    }, 520);
  };

  const verify = (next: string[]) => {
    if (!next.every(Boolean)) return;
    next.join("") === SECRET ? unlock() : fail();
  };

  const handleChange = (i: number, raw: string) => {
    const char = raw.replace(/[^a-zA-Z0-9]/g, "").slice(-1).toLowerCase();
    const next  = [...otp];
    next[i]     = char;
    setOtp(next);
    setError(false);
    if (char && i < SLOTS - 1) inputRefs.current[i + 1]?.focus();
    verify(next);
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = [...otp];
      if (next[i]) {
        next[i] = "";
        setOtp(next);
      } else if (i > 0) {
        inputRefs.current[i - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft"  && i > 0)        inputRefs.current[i - 1]?.focus();
    else if   (e.key === "ArrowRight" && i < SLOTS - 1) inputRefs.current[i + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const chars = e.clipboardData
      .getData("text")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .slice(0, SLOTS)
      .split("");

    const next = Array(SLOTS).fill("") as string[];
    chars.forEach((c, i) => { next[i] = c; });
    setOtp(next);
    inputRefs.current[Math.min(chars.length, SLOTS - 1)]?.focus();
    verify(next);
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  if (unlocked) return null;

  return (
    <>
      {/*
        Sentinel — 1px, in normal document flow at the top of cs-case-page.
        IntersectionObserver uses this; no scroll event listeners needed.
      */}
      <div ref={sentinelRef} className="lb-gate__sentinel" aria-hidden="true" />

      {active && (
        <div
          className={[
            "lb-gate",
            shake   ? "lb-gate--shake"   : "",
            leaving ? "lb-gate--leaving" : "",
          ].filter(Boolean).join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label={t("lotoBolaGate.eyebrow")}
        >
          {/* Liquid blob background */}
          <div className="lb-gate__blobs" aria-hidden="true">
            <span className="lb-gate__blob lb-gate__blob--a" />
            <span className="lb-gate__blob lb-gate__blob--b" />
            <span className="lb-gate__blob lb-gate__blob--c" />
            <span className="lb-gate__blob lb-gate__blob--d" />
            <span className="lb-gate__blob lb-gate__blob--e" />
          </div>

          {/* Content */}
          <div className="lb-gate__body">
            <p className="lb-gate__eyebrow">{t("lotoBolaGate.eyebrow")}</p>
            <p className="lb-gate__copy">{t("lotoBolaGate.copy")}</p>

            <div
              className={`lb-gate__otp${error ? " lb-gate__otp--error" : ""}`}
              onPaste={handlePaste}
            >
              {otp.map((char, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  className="lb-gate__slot"
                  type="text"
                  inputMode="text"
                  maxLength={1}
                  value={char}
                  autoFocus={i === 0}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={`${i + 1} / ${SLOTS}`}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
