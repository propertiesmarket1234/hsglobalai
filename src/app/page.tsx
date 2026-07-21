import Products from "@/components/Products";
import Header from "@/components/Header";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import WhyHSGlobal from "@/components/WhyHSGlobal";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white z-10">
          <p className="mb-4 text-lg text-gray-300">
            HS Global AI
          </p>

          <h1 className="text-5xl font-bold md:text-7xl animated-gradient-text">
            AI Experiences
            <br />
            Built for the Real World
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Transform customer experiences with AI Digital Humans,
            Holographic Avatars, Spatial Displays, Virtual Try-On,
            Voice AI and intelligent interactive solutions.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black">
            Book a Demo
          </button>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
<Solutions />

      {/* PRODUCTS SECTION */}
<Products />

{/* INDUSTRIES SECTION */}
<Industries />

{/* WHY HS GLOBAL AI SECTION */}
<WhyHSGlobal />

{/* CTA SECTION */}
<CTA />

{/* FOOTER */}
<Footer />

</main>

  );
}