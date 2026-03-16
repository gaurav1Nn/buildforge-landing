import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

// Digit component with flip animation
const DigitFlip = ({ value, label }: { value: number; label: string }) => {
  const prevValue = useRef(value);
  const digitRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (value !== prevValue.current) {
      const digits = value.toString().padStart(2, "0").split("");
      const prevDigits = prevValue.current.toString().padStart(2, "0").split("");

      digits.forEach((digit, i) => {
        if (digit !== prevDigits[i] && digitRefs.current[i]) {
          const el = digitRefs.current[i];
          gsap.fromTo(
            el,
            { rotateX: -90, opacity: 0 },
            {
              rotateX: 0,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            }
          );
        }
      });

      prevValue.current = value;
    }
  }, [value]);

  const digits = value.toString().padStart(2, "0").split("");

  return (
    <div className="flex flex-col items-center group">
      <div className="flex gap-1">
        {digits.map((digit, i) => (
          <span
            key={i}
            ref={(el) => (digitRefs.current[i] = el)}
            className="text-2xl sm:text-3xl font-bold tabular-nums text-foreground group-hover:text-glow transition-all"
            style={{ display: "inline-block", transformStyle: "preserve-3d" }}
          >
            {digit}
          </span>
        ))}
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );
};

export const Countdown = ({ targetDate = "2026-06-29T00:00:00" }: { targetDate?: string }) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="flex gap-8">
      <DigitFlip value={timeLeft.d} label="DAYS" />
      <DigitFlip value={timeLeft.h} label="HOURS" />
      <DigitFlip value={timeLeft.m} label="MINUTES" />
      <DigitFlip value={timeLeft.s} label="SECONDS" />
    </div>
  );
};
