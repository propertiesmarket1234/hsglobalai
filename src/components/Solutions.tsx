const solutions = [
  {
    number: "01",
    title: "AI Digital Humans",
    description:
      "Create intelligent, human-like digital avatars that communicate naturally across languages and customer touchpoints.",
  },
  {
    number: "02",
    title: "AI Hologram Box",
    description:
      "Bring interactive AI-powered avatars into physical environments through immersive holographic experiences.",
  },
  {
    number: "03",
    title: "Spatial Display",
    description:
      "Transform digital content into immersive visual experiences designed to capture attention in physical spaces.",
  },
  {
    number: "04",
    title: "Virtual Try-On",
    description:
      "Let customers visualize how garments look on them digitally, making online fashion discovery easier and more engaging.",
  },
  {
    number: "05",
    title: "Voice Clone",
    description:
      "Create natural AI-powered voice experiences for personalized communication and intelligent applications.",
  },
];

export default function Solutions() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">
            Our Technology
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold md:text-6xl">
            AI experiences built for the
            <span className="animated-gradient-text"> physical and digital world.</span>
          </h2>
        </div>

        <div className="border-t border-white/20">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="grid gap-5 border-b border-white/20 py-10 transition-all duration-300 hover:bg-white/5 md:grid-cols-[80px_1fr_1fr] md:px-6"
            >
              <span className="text-sm text-gray-500">
                {solution.number}
              </span>

              <h3 className="text-2xl font-medium md:text-3xl">
                {solution.title}
              </h3>

              <p className="max-w-xl leading-7 text-gray-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}