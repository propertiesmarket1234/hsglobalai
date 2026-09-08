import HolographicDisplayPage from "@/app/products/holographic-display/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default HolographicDisplayPage;
