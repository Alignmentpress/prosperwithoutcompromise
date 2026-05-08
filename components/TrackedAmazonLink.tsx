"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackAmazonClick } from "@/lib/analytics";

type TrackedAmazonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  placement: string;
  marketplace?: "us" | "fr";
  locale?: string;
};

export default function TrackedAmazonLink({
  placement,
  marketplace,
  locale,
  href,
  children,
  ...rest
}: TrackedAmazonLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      onClick={() => trackAmazonClick({ placement, marketplace, locale })}
    >
      {children}
    </a>
  );
}
