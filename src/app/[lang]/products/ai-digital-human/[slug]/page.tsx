import DihuavaCapabilityPage from "@/app/products/ai-digital-human/[slug]/page";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es"];
  const slugs = [
    "avatar-customization",
    "document-intelligence",
    "multilingual-support",
    "persona-management",
    "ai-product-catalog",
  ];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export default DihuavaCapabilityPage;
