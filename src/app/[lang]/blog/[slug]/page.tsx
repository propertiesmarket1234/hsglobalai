import BlogPostPage, { generateMetadata as baseGenerateMetadata } from "@/app/blog/[slug]/page";
import { blogPosts } from "@/data/blogPosts";
import { getLocalizedAlternates } from "@/i18n/config";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es", "fr"];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const post of blogPosts) {
      params.push({ lang, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const baseMeta = await baseGenerateMetadata({
    params: Promise.resolve({ slug: resolvedParams.slug }),
  });
  return {
    ...baseMeta,
    alternates: getLocalizedAlternates(`/blog/${resolvedParams.slug}`, resolvedParams.lang),
  };
}

export default BlogPostPage;
