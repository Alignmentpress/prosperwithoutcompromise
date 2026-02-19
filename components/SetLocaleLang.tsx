"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export default function SetLocaleLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "fr" ? "fr" : "en";
  }, [locale]);
  return null;
}
