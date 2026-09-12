import IndustryDetailPage from "@/app/industries/[slug]/page";
import { industriesData } from "@/data/industriesData";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es", "fr"];
  const slugs = Object.keys(industriesData);
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export default IndustryDetailPage;
