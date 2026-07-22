import Image from "next/image";
export default function ProductShowcase() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="border-t border-white/10 py-24">
          <div className="grid gap-12 md:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="mb-6 text-sm tracking-[0.3em] text-gray-500">
                01
              </p>

              <h2 className="text-4xl font-bold md:text-6xl">
                AI Digital
                <br />
                Humans
              </h2>
              <div className="mt-10 overflow-hidden rounded-2xl">
  <Image
    src="/products/digital-humans/digital-human-new.png"
    alt="AI Digital Human"
    width={700}
    height={900}
    className="h-auto w-full object-cover"
  />
</div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-8 text-gray-400">
                Intelligent, human-like AI avatars designed to communicate
                naturally with customers across languages, industries, and
                real-world environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Multilingual
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Custom Avatars
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Voice AI
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Real-Time Interaction
                </span>
              </div>

              <a
                href="#"
                className="mt-10 inline-block font-medium transition hover:opacity-70"
              >
                Explore AI Digital Humans →
              </a>
            </div>

          </div>
        </div>
{/* 02 — AI HOLOGRAM BOX */}
<div className="border-t border-white/10 py-24">
  <div className="grid gap-12 md:grid-cols-2">

    <div>
      <p className="mb-6 text-sm tracking-[0.3em] text-gray-500">
        02
      </p>

      <h2 className="text-4xl font-bold md:text-6xl">
        AI Hologram
        <br />
        Box
      </h2>
    </div>

    <div className="flex flex-col justify-center">
      <p className="max-w-xl text-lg leading-8 text-gray-400">
        Bring intelligent AI Digital Humans into physical environments
        through immersive holographic experiences designed for real-world
        customer interaction.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Interactive Avatars
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Offline AI
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Multilingual
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Multiple Sizes
        </span>
      </div>

      <a
        href="#"
        className="mt-10 inline-block font-medium transition hover:opacity-70"
      >
        Explore AI Hologram Box →
      </a>
    </div>

  </div>
</div>


{/* 03 — SPATIAL DISPLAY */}
<div className="border-t border-white/10 py-24">
  <div className="grid gap-12 md:grid-cols-2">

    <div>
      <p className="mb-6 text-sm tracking-[0.3em] text-gray-500">
        03
      </p>

      <h2 className="text-4xl font-bold md:text-6xl">
        Spatial
        <br />
        Display
      </h2>
    </div>

    <div className="flex flex-col justify-center">
      <p className="max-w-xl text-lg leading-8 text-gray-400">
        Transform digital content into immersive visual experiences
        designed to capture attention and create engaging interactions
        in physical spaces.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Immersive Visuals
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          3D Experience
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Digital Signage
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Interactive Display
        </span>
      </div>

      <a
        href="#"
        className="mt-10 inline-block font-medium transition hover:opacity-70"
      >
        Explore Spatial Display →
      </a>
    </div>

  </div>
</div>


{/* 04 — VIRTUAL TRY-ON */}
<div className="border-y border-white/10 py-24">
  <div className="grid gap-12 md:grid-cols-2">

    <div>
      <p className="mb-6 text-sm tracking-[0.3em] text-gray-500">
        04
      </p>

      <h2 className="text-4xl font-bold md:text-6xl">
        Virtual
        <br />
        Try-On
      </h2>
    </div>

    <div className="flex flex-col justify-center">
      <p className="max-w-xl text-lg leading-8 text-gray-400">
        Enable customers to visualize products digitally before making
        a purchase, creating more interactive and engaging shopping
        experiences.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          AI-Powered
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Real-Time Try-On
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Retail Experience
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
          Product Visualization
        </span>
      </div>

      <a
        href="#"
        className="mt-10 inline-block font-medium transition hover:opacity-70"
      >
        Explore Virtual Try-On →
      </a>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}