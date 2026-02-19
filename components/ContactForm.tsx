"use client";

import { useState } from "react";

type ContactTranslations = {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  sending: string;
  messageSent: string;
  successMessage: string;
  getInTouch: string;
  getInTouchDesc: string;
  commonInquiries: string;
};

const inquiryItemsEn = [
  "Speaking engagements",
  "Workshop information",
  "Coaching sessions",
  "Press & media",
  "Partnership opportunities",
];

const inquiryItemsFr = [
  "Conférences",
  "Informations ateliers",
  "Sessions de coaching",
  "Presse & médias",
  "Partenariats",
];

interface ContactFormProps {
  t: ContactTranslations;
  locale: string;
}

export default function ContactForm({ t, locale }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMessage(t.successMessage);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMessage("Connection error. Please try again.");
    }
  };

  const inquiryItems = locale === "fr" ? inquiryItemsFr : inquiryItemsEn;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
      <div className="lg:col-span-3">
        {status === "success" ? (
          <div className="border-glow rounded-2xl p-12 bg-white/[0.02] text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-6">
              <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{t.messageSent}</h3>
            <p className="text-gray-400">{responseMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {t.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 focus:border-gold-400 focus:bg-white/[0.07]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t.message}
              </label>
              <textarea
                id="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 resize-none focus:border-gold-400 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.sending}
                </span>
              ) : (
                t.send
              )}
            </button>
            {status === "error" && <p className="text-red-400 text-sm text-center">{responseMessage}</p>}
          </form>
        )}
      </div>

      <div className="lg:col-span-2">
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">{t.getInTouch}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.getInTouchDesc}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Email</p>
                <a href="mailto:kevin@alignmentpress.com" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  kevin@alignmentpress.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Website</p>
                <p className="text-gray-400 text-sm">alignmentpress.com</p>
              </div>
            </div>
          </div>
          <div className="border-glow rounded-xl p-6 bg-white/[0.02]">
            <h4 className="font-serif text-lg font-bold text-white mb-3">{t.commonInquiries}</h4>
            <ul className="space-y-2">
              {inquiryItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
