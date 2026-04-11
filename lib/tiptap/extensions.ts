import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import type { Extensions } from "@tiptap/react";

export const tiptapExtensions = (placeholder?: string): Extensions => [
  StarterKit.configure({
    heading: { levels: [2, 3, 4] },
  }),
  Underline,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: { class: "text-gold-400 underline underline-offset-2 hover:text-gold-300" },
  }),
  Image.configure({
    HTMLAttributes: { class: "rounded-xl max-w-full h-auto my-6 border border-white/10" },
  }),
  Placeholder.configure({
    placeholder: placeholder ?? "Write your article…",
  }),
];
