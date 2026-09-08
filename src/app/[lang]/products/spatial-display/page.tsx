import SpatialDisplayPage from "@/app/products/spatial-display/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default SpatialDisplayPage;
