import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-24 text-center md:px-16 md:py-32">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              Build the Future with AI
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Bring intelligent AI
              <br />
              experiences to your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Discover how HS Global AI can transform customer engagement
              with AI Digital Humans, holographic experiences, spatial
              displays, and intelligent AI solutions.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              >
                Book a Demo →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}