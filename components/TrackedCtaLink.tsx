"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackCtaClick } from "@/lib/analytics";

type TrackedCtaLinkProps = ComponentProps<typeof Link> & {
  ctaId: string;
  locale: string;
};

export default function TrackedCtaLink({ ctaId, locale, href, onClick, ...rest }: TrackedCtaLinkProps) {
  const path = typeof href === "string" ? href : "";
  return (
    <Link
      {...rest}
      href={href}
      onClick={(e) => {
        if (path) {
          trackCtaClick({ cta_id: ctaId, link_url: path, locale });
        }
        onClick?.(e);
      }}
    />
  );
}
