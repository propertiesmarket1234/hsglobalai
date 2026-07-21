export default function Products() {
  const products = [
    {
      title: "AI Digital Humans",
      description:
        "Intelligent, human-like AI avatars designed for natural customer interactions.",
    },
    {
      title: "AI Hologram Box",
      description:
        "Bring interactive AI-powered digital humans into real-world environments.",
    },
    {
      title: "Spatial Display",
      description:
        "Immersive visual experiences that transform how digital content is presented.",
    },
    {
      title: "Virtual Try-On",
      description:
        "AI-powered virtual experiences that let customers visualize products digitally.",
    },
  ];

  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Featured Products
        </p>

        <h2 className="max-w-4xl text-4xl font-bold md:text-6xl">
          AI products designed for
          <br />
          real-world experiences.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {products.map((product) => (
            <div
              key={product.title}
              className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-10"
            >
              <h3 className="text-3xl font-semibold">
                {product.title}
              </h3>

              <p className="mt-4 max-w-md text-gray-400">
                {product.description}
              </p>

              <button className="mt-8 text-sm font-medium">
                Explore →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}