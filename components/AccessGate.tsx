"use client";

import { useState, useEffect } from "react";
import CountdownGate from "./CountdownGate";
import { hasGateAccess } from "@/lib/gate";

export default function AccessGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    setHasAccess(hasGateAccess());
  }, []);

  // Initial load: show nothing or minimal to avoid flash. We'll default to gate
  // to prevent brief full-site flash for new users. For returning users there
  // may be a brief gate flash before we set hasAccess - but the check is sync
  // so it should be fast. Using null to show a minimal loading state.
  if (hasAccess === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-950">
        <div className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
      </div>
    );
  }

  if (!hasAccess) {
    return <CountdownGate />;
  }

  return <>{children}</>;
}
