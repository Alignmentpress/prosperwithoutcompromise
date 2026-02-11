"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  source?: string;
  compact?: boolean;
}

export default function LeadCaptureForm({
  source = "website",
  compact = false,
}: LeadCaptureFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          email,
          source,
          interest: ["book"],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome aboard! Check your inbox soon.");
        setFirstName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-4">
          <svg
            className="w-8 h-8 text-gold-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-gold-400 font-semibold text-lg">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      <div className={compact ? "flex flex-col sm:flex-row gap-3" : "space-y-4"}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className={`w-full px-4 ${compact ? "py-3" : "py-3.5"} bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]`}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full px-4 ${compact ? "py-3" : "py-3.5"} bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full ${compact ? "py-3" : "py-3.5"} bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 text-sm shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          "Join the Movement"
        )}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{message}</p>
      )}
      <p className="text-gray-500 text-xs text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
