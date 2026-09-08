import BlogPage from "@/app/blog/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default BlogPage;
