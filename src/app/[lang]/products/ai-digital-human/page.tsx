import AIDigitalHumanPage from "@/app/products/ai-digital-human/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default AIDigitalHumanPage;
