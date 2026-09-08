import EventsPage from "@/app/events/page";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default EventsPage;
