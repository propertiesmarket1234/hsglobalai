import IndustriesPage from "@/app/industries/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default IndustriesPage;
