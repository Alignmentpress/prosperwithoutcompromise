import { permanentRedirect } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function ResourceArticleRedirect({ params }: Props) {
  const { locale, slug } = await params;
  permanentRedirect(`/${locale}/blog/${slug}`);
}
