export interface VideoEntry {
  id: string;
  youtubeId: string;
  url: string;
  topic: string;
  description: string;
  thumbnailUrl?: string;
}

const YOUTUBE_CHANNEL_HANDLE = "@AlignmentPress";
const YOUTUBE_SHORTS_URL = `https://www.youtube.com/${YOUTUBE_CHANNEL_HANDLE}/shorts`;
const YOUTUBE_REVALIDATE_SECONDS = 60 * 60;

const fallbackAcademyVideos: VideoEntry[] = [
  {
    id: "eqR6C9q1fp8",
    youtubeId: "eqR6C9q1fp8",
    url: "https://www.youtube.com/shorts/eqR6C9q1fp8",
    topic: "You are prophesying your own poverty without knowing it.",
    description: "Short from Alignment Press.",
  },
  {
    id: "wFSnpRUMs0w",
    youtubeId: "wFSnpRUMs0w",
    url: "https://www.youtube.com/shorts/wFSnpRUMs0w",
    topic: "WHY YOU'RE STILL BROKE EVEN THOUGH YOU PRAY",
    description: "Short from Alignment Press.",
  },
  {
    id: "qs57Si4KZQw",
    youtubeId: "qs57Si4KZQw",
    url: "https://www.youtube.com/shorts/qs57Si4KZQw",
    topic: "BECOME A CHANNEL OF ABUNDANCE (ENGLISH)",
    description: "Short from Alignment Press.",
  },
  {
    id: "XuNf_pP79N4",
    youtubeId: "XuNf_pP79N4",
    url: "https://www.youtube.com/shorts/XuNf_pP79N4",
    topic: "LE SECRET BIBLIQUE DE L'ABONDANCE QUE PERSONNE NE TE DIT.",
    description: "Short from Alignment Press.",
  },
  {
    id: "SLxKqTCRbYA",
    youtubeId: "SLxKqTCRbYA",
    url: "https://www.youtube.com/shorts/SLxKqTCRbYA",
    topic: "DIVINE PROVISION IS YOURS - DECLARE IT NOW #financialbreakthrough #abundance #prayer",
    description: "Short from Alignment Press.",
  },
  {
    id: "wFywIqPDUOI",
    youtubeId: "wFywIqPDUOI",
    url: "https://www.youtube.com/shorts/wFywIqPDUOI",
    topic: "THE PRAYER THAT BREAKS FINANCIAL CHAINS",
    description: "Short from Alignment Press.",
  },
];

export async function getAcademyVideos(): Promise<VideoEntry[]> {
  try {
    const response = await fetch(YOUTUBE_SHORTS_URL, {
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: YOUTUBE_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return fallbackAcademyVideos;
    }

    const shorts = parseYouTubeShorts(await response.text());
    return shorts.length > 0 ? shorts : fallbackAcademyVideos;
  } catch {
    return fallbackAcademyVideos;
  }
}

export function getMasterclassEnrollUrl(): string | null {
  return process.env.NEXT_PUBLIC_MASTERCLASS_ENROLL_URL ?? null;
}

function parseYouTubeShorts(html: string): VideoEntry[] {
  const match = html.match(/var ytInitialData = (\{.*?\});<\/script>/);
  if (!match?.[1]) {
    return [];
  }

  try {
    const data: unknown = JSON.parse(match[1]);
    const entries: VideoEntry[] = [];
    collectShorts(data, entries);
    return dedupeById(entries);
  } catch {
    return [];
  }
}

function collectShorts(value: unknown, entries: VideoEntry[]): void {
  if (Array.isArray(value)) {
    for (const item of value) {
      collectShorts(item, entries);
    }
    return;
  }

  if (!isRecord(value)) {
    return;
  }

  const short = value.shortsLockupViewModel;
  if (isRecord(short)) {
    const endpoint = getRecord(short, "onTap", "innertubeCommand", "reelWatchEndpoint");
    const videoId = getString(endpoint, "videoId");
    const accessibilityText = getString(short, "accessibilityText");

    if (videoId) {
      entries.push({
        id: videoId,
        youtubeId: videoId,
        url: `https://www.youtube.com/shorts/${videoId}`,
        topic: getTitleFromAccessibilityText(accessibilityText) ?? "Alignment Press Short",
        description: "Short from Alignment Press.",
        thumbnailUrl: getString(getRecord(endpoint, "thumbnail", "thumbnails", "0"), "url"),
      });
    }
  }

  for (const item of Object.values(value)) {
    collectShorts(item, entries);
  }
}

function dedupeById(entries: VideoEntry[]): VideoEntry[] {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.id)) {
      return false;
    }
    seen.add(entry.id);
    return true;
  });
}

function getTitleFromAccessibilityText(accessibilityText: string | undefined): string | undefined {
  return accessibilityText?.replace(/, [\d,.]+ views? - play Short$/, "").trim();
}

function getRecord(value: unknown, ...path: string[]): Record<string, unknown> | undefined {
  let current = value;

  for (const key of path) {
    if (Array.isArray(current)) {
      current = current[Number(key)];
    } else if (isRecord(current)) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return isRecord(current) ? current : undefined;
}

function getString(value: unknown, key: string): string | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const candidate = value[key];
  return typeof candidate === "string" ? candidate : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
