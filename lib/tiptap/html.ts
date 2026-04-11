import { generateHTML } from "@tiptap/html";
import { tiptapExtensions } from "./extensions";

export function tiptapJsonToHtml(doc: unknown): string {
  if (!doc || typeof doc !== "object") {
    return "<p></p>";
  }
  return generateHTML(doc as Parameters<typeof generateHTML>[0], tiptapExtensions());
}
