import { useEffect, useState } from "react";

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Australia", "Canada",
  "Singapore", "Indonesia", "Philippines", "UAE", "Other",
];

const AGE_RANGES = ["18–22", "23–27", "28–34", "35–44", "45+"];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

const INITIAL = { firstName: "", lastName: "", email: "", country: "", age: "" };

export const ReserveModal = ({ isOpen, onClose }: Props) => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) { setForm(INITIAL); setStatus("idle"); }
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (key: keyof typeof INITIAL) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const pick = (key: keyof typeof INITIAL) => (val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/brannplay@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _captcha: "false",
          _subject: "New BravioSchool Application — Cohort 1",
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Country: form.country,
          Age: form.age,
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 p-8"
        style={{ background: "hsl(var(--card))" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-lg leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* ── Success State ── */}
        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div className="text-4xl">🎉</div>
            <h2 className="text-2xl font-bold text-white">You're on the list!</h2>
            <p className="text-sm text-white/50">
              We've received your application for Cohort 1. We'll be in touch soon.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <p className="section-label">Cohort 1 · 30 Seats</p>
            <h2 className="text-2xl font-bold text-white mb-6">Reserve Your Spot</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name">
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    className={inputCls}
                    value={form.firstName}
                    onChange={set("firstName")}
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    className={inputCls}
                    value={form.lastName}
                    onChange={set("lastName")}
                  />
                </Field>
              </div>

              <Field label="Email">
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className={inputCls}
                  value={form.email}
                  onChange={set("email")}
                />
              </Field>

              <Field label="Country">
                <Dropdown options={COUNTRIES} value={form.country}
                  placeholder="Select your country" onChange={pick("country")} />
              </Field>

              <Field label="Age">
                <Dropdown options={AGE_RANGES} value={form.age}
                  placeholder="Select your age range" onChange={pick("age")} />
              </Field>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full py-3 rounded-xl bg-white text-black text-sm font-bold tracking-wide hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting…" : "Submit Application →"}
              </button>

              <p className="text-center text-[11px] text-white/25">
                No tuition · Equity-free · Limited spots
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// ── Custom Dropdown ───────────────────────────────────────────────────────────

const Dropdown = ({ options, value, placeholder, onChange }: {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputCls} flex items-center justify-between w-full text-left cursor-pointer`}
        style={{ color: value ? "white" : "rgba(255,255,255,0.3)" }}
      >
        <span>{value || placeholder}</span>
        <svg
          className={`w-4 h-4 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute z-10 w-full mt-1 rounded-xl border border-white/10 overflow-hidden max-h-48 overflow-y-auto"
          style={{ background: "hsl(var(--card))" }}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2.5 text-sm cursor-pointer transition-colors
                ${opt === value
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ── Helpers ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
      {label}
    </label>
    {children}
  </div>
);
