import BlogPostPage from "@/app/blog/[slug]/page";
import { blogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es"];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const post of blogPosts) {
      params.push({ lang, slug: post.slug });
    }
  }

  return params;
}

export default BlogPostPage;
