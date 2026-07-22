import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* ABOUT HERO */}
      <section className="px-6 pt-28 pb-28 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-sm uppercase tracking-[0.35em] text-slate-500">
            
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:items-end">

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Building AI for
              <br />
              the real world.
            </h1>

            <div className="max-w-xl">
              <p className="text-lg leading-8 text-slate-400">
                
                HS Global AI builds intelligent AI experiences that connect
                people, technology, and physical environments.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                From AI Digital Humans and holographic experiences to spatial
                displays, Virtual Try-On, and offline AI, we create practical
                solutions designed for real-world business environments.
              </p>
            </div>

          </div>
        </div>
      </section>
{/* WHO WE ARE */}
<section className="border-t border-white/10 px-6 py-28 md:py-36">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 md:grid-cols-2 md:gap-20">

      {/* LEFT */}
      <div>
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-slate-500">
          Who We Are
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          We bring AI into
          <br />
          the physical world.
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-end">
        <p className="max-w-xl text-lg leading-8 text-slate-400">
          HS Global AI develops intelligent AI-powered experiences designed
          for real-world customer interactions.
        </p>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          We combine AI Digital Humans, conversational AI, holographic
          technology, spatial displays, and intelligent software to help
          organizations create more natural, engaging, and accessible
          customer experiences.
        </p>
      </div>

    </div>
  </div>
</section>
{/* WHAT WE BUILD */}
<section className="border-t border-white/10 px-6 py-28 md:py-36">
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADING */}
    <div className="mb-20 grid gap-8 md:grid-cols-2">
      <div>
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-500">
          What We Build
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          AI experiences built
          <br />
          for real-world impact.
        </h2>
      </div>

      <div className="flex items-end">
        <p className="max-w-xl text-lg leading-8 text-slate-400">
          We combine intelligent software, digital humans, and immersive
          display technologies to create AI experiences for physical and
          digital environments.
        </p>
      </div>
    </div>

    {/* 4 PRODUCT AREAS */}
    <div className="grid border-t border-l border-white/10 md:grid-cols-2">

      {/* 01 */}
      <div className="border-r border-b border-white/10 p-10 md:p-12">
        <p className="mb-16 text-sm text-slate-500">
          01
        </p>

        <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
          AI Digital Humans
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          Human-like AI experiences designed for natural, multilingual,
          and interactive customer communication.
        </p>
      </div>

      {/* 02 */}
      <div className="border-r border-b border-white/10 p-10 md:p-12">
        <p className="mb-16 text-sm text-slate-500">
          02
        </p>

        <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
          AI Hologram Experiences
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          Interactive AI avatars delivered through immersive holographic
          displays for engaging real-world interactions.
        </p>
      </div>

      {/* 03 */}
      <div className="border-r border-b border-white/10 p-10 md:p-12">
        <p className="mb-16 text-sm text-slate-500">
          03
        </p>

        <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
          Spatial Experiences
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          Immersive visual experiences that transform digital content into
          engaging interactions within physical spaces.
        </p>
      </div>

      {/* 04 */}
      <div className="border-r border-b border-white/10 p-10 md:p-12">
        <p className="mb-16 text-sm text-slate-500">
          04
        </p>

        <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
          Virtual Try-On
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          AI-powered visualization experiences that help customers explore
          and experience products digitally before making a decision.
        </p>
      </div>

    </div>
  </div>
</section>
{/* OUR APPROACH */}
<section className="border-t border-white/10 px-6 py-28 md:py-36">
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}
    <div className="mb-20 grid gap-8 md:grid-cols-2">
      <div>
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-500">
          Our Approach
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Intelligent by design.
          <br />
          Practical by nature.
        </h2>
      </div>

      <div className="flex items-end">
        <p className="max-w-xl text-lg leading-8 text-slate-400">
          We design AI experiences around the realities of physical
          environments, business operations, customer interactions,
          privacy, and accessibility.
        </p>
      </div>
    </div>

    {/* APPROACH ITEMS */}
    <div className="grid border-t border-white/10 md:grid-cols-2">

      {/* 01 */}
      <div className="border-b border-white/10 py-12 md:border-r md:p-12">
        <p className="mb-12 text-sm text-slate-500">
          01
        </p>

        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Offline-First AI
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          AI experiences designed to operate locally without depending
          entirely on cloud connectivity.
        </p>
      </div>

      {/* 02 */}
      <div className="border-b border-white/10 py-12 md:p-12">
        <p className="mb-12 text-sm text-slate-500">
          02
        </p>

        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Privacy by Design
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          Designed to keep sensitive interactions and business data
          within secure environments where required.
        </p>
      </div>

      {/* 03 */}
      <div className="border-b border-white/10 py-12 md:border-r md:p-12">
        <p className="mb-12 text-sm text-slate-500">
          03
        </p>

        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Multilingual Experiences
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          Natural AI interactions designed to support customers across
          multiple languages, regions, and markets.
        </p>
      </div>

      {/* 04 */}
      <div className="border-b border-white/10 py-12 md:p-12">
        <p className="mb-12 text-sm text-slate-500">
          04
        </p>

        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Built for Real Environments
        </h3>

        <p className="max-w-md leading-7 text-slate-400">
          AI solutions designed for practical deployment across retail,
          banking, healthcare, education, exhibitions, and other
          real-world environments.
        </p>
      </div>

    </div>
  </div>
</section>
{/* INDUSTRIES WE SERVE */}
<section className="border-t border-white/10 px-6 py-28 md:py-36">
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}
    <div className="mb-20 grid gap-8 md:grid-cols-2">
      <div>
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-500">
          Industries We Serve
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          AI built around
          <br />
          real-world industries.
        </h2>
      </div>

      <div className="flex items-end">
        <p className="max-w-xl text-lg leading-8 text-slate-400">
          Our AI experiences are designed to adapt across industries,
          helping organizations create smarter, more engaging interactions
          with customers, visitors, employees, and communities.
        </p>
      </div>
    </div>

    {/* INDUSTRY LIST */}
    <div className="border-t border-white/10">

      {/* 01 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          01
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Banking & Financial Services
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

      {/* 02 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          02
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Retail & Advertising
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

      {/* 03 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          03
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Corporate Services
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

      {/* 04 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          04
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Tourism & Exhibitions
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

      {/* 05 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          05
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Healthcare & Telemedicine
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

      {/* 06 */}
      <div className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[100px_1fr_auto]">
        <span className="text-sm text-slate-500">
          06
        </span>

        <h3 className="text-2xl font-medium md:text-3xl">
          Education & Training
        </h3>

        <span className="hidden text-2xl text-slate-600 transition group-hover:translate-x-2 group-hover:text-white md:block">
          →
        </span>
      </div>

    </div>
  </div>
</section>
      <CTA />
      <Footer />
    </main>
  );
}