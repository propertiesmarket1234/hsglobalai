export default function WhyHSGlobal() {
  const features = [
    {
      number: "01",
      title: "100% Offline AI",
      description:
        "Run intelligent AI experiences locally without depending on cloud connectivity.",
    },
    {
      number: "02",
      title: "Multilingual Experiences",
      description:
        "Communicate naturally across multiple languages for global and local customer experiences.",
    },
    {
      number: "03",
      title: "Custom AI Avatars",
      description:
        "Create customizable digital humans designed for different brands, industries, languages, and use cases.",
    },
    {
      number: "04",
      title: "Privacy by Design",
      description:
        "Keep sensitive interactions and business data within secure local environments.",
    },
  ];

  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Why HS Global AI
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
            AI built for the
            <br />
            real world.
          </h2>

          <p className="max-w-md leading-7 text-gray-400">
            Powerful AI experiences designed to operate securely,
            intelligently, and reliably across real-world environments.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group min-h-[300px] bg-black p-10 transition duration-300 hover:bg-white/[0.04]"
            >
              <span className="text-sm text-gray-600">
                {feature.number}
              </span>

              <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}