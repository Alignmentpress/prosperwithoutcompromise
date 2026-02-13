export const LAUNCH_DATE = new Date("2026-02-18T00:00:00");
export const GATE_STORAGE_KEY = "alignmentpress_subscribed";

export function hasGateAccess(): boolean {
  if (typeof window === "undefined") return false;
  if (new Date() >= LAUNCH_DATE) return true;
  return window.localStorage.getItem(GATE_STORAGE_KEY) === "true";
}
