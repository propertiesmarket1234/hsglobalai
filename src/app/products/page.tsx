"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* PRODUCTS HERO */}
      <section className="px-6 pt-24 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500" />

          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              AI products built for
              <br />
              real-world experiences.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              Explore intelligent AI solutions designed to connect digital
              experiences with physical environments — from AI Digital Humans
              and holographic avatars to spatial displays and Virtual Try-On.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE - moved directly below hero */}
      <ProductShowcase />

      <Footer />
    </main>
  );
}