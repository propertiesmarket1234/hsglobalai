import IndustriesShowcase from "@/components/IndustriesShowcase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* INDUSTRIES HERO */}
      <section className="px-6 pt-28 pb-28 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.35em] text-slate-500">
            Industries
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:items-end">
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Intelligent AI built
              <br />
              for real-world
              <br />
              industries.
            </h1>

            <div className="max-w-xl">
              <p className="text-lg leading-8 text-slate-400">
                HS Global AI creates intelligent experiences designed for
                real-world industries, helping organizations transform customer
                engagement, automate interactions, and connect digital
                intelligence with physical environments.
              </p>
            </div>
          </div>
        </div>
      </section>
  <IndustriesShowcase />
      <CTA />
      <Footer />
    </main>
  );
}