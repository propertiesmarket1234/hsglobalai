import Home from "@/app/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default Home;
