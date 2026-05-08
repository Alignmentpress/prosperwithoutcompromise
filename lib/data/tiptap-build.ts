/** Minimal TipTap JSON builders (matches StarterKit + Link in lib/tiptap/extensions). */

export const AMAZON_BOOK_CTA_HREF =
  "https://www.amazon.fr/stores/author/B0GPXFP9B2/allbooks";

export function doc(content: object[]): object {
  return { type: "doc", content };
}

export function paragraph(...content: object[]): object {
  return { type: "paragraph", content };
}

export function text(value: string, marks?: object[]): object {
  const node: { type: string; text: string; marks?: object[] } = { type: "text", text: value };
  if (marks?.length) node.marks = marks;
  return node;
}

export function bold(value: string): object {
  return text(value, [{ type: "bold" }]);
}

export function linkMark(href: string): object {
  return {
    type: "link",
    attrs: { href, target: "_blank", rel: "noopener noreferrer" },
  };
}

export function linkedText(label: string, href: string): object {
  return text(label, [linkMark(href)]);
}

export function h2(...content: object[]): object {
  return { type: "heading", attrs: { level: 2 }, content };
}

export function h3(...content: object[]): object {
  return { type: "heading", attrs: { level: 3 }, content };
}

export function bulletList(...items: object[]): object {
  return { type: "bulletList", content: items };
}

export function orderedList(...items: object[]): object {
  return { type: "orderedList", content: items };
}

export function listItem(...blockContent: object[]): object {
  return { type: "listItem", content: blockContent };
}
