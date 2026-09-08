import AboutPage from "@/app/about/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default AboutPage;
