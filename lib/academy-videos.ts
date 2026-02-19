/**
 * Video Library entries. Use Vimeo video IDs or URLs.
 * Add NEXT_PUBLIC_MASTERCLASS_ENROLL_URL in .env for "Enroll Now" link.
 */
export interface VideoEntry {
  id: string;
  vimeoId: string | null;
  /** Optional: use if no vimeoId, link to external URL */
  url?: string;
  /** Topic tag e.g. "Integrity in Sales", "Biblical Mindset" */
  topic: string;
  /** Short description (1–2 lines) */
  description: string;
  /** Duration label e.g. "2 min" */
  duration?: string;
}

export const academyVideos: VideoEntry[] = [
  {
    id: "1",
    vimeoId: null,
    topic: "Integrity in Sales",
    description: "How to close deals without compromising your values.",
    duration: "2 min",
  },
  {
    id: "2",
    vimeoId: null,
    topic: "Biblical Mindset",
    description: "Grounding your business decisions in wisdom that lasts.",
    duration: "3 min",
  },
  {
    id: "3",
    vimeoId: null,
    topic: "Leadership Alignment",
    description: "Leading from the inside out: intention before strategy.",
    duration: "2 min",
  },
];

export function getMasterclassEnrollUrl(): string | null {
  return process.env.NEXT_PUBLIC_MASTERCLASS_ENROLL_URL ?? null;
}
