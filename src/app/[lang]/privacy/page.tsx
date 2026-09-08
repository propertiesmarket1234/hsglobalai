import PrivacyPage from "@/app/privacy/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default PrivacyPage;
