import DownloadCenterPage from "@/app/contact/download-center/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default DownloadCenterPage;
