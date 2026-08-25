import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      number: "01",
      slug: "banking",
      title: "Banking & Financial Services",
      description:
        "Deliver intelligent customer assistance, financial guidance, and interactive AI experiences across banking environments.",
    },
    {
      number: "02",
      slug: "retail",
      title: "Retail & Advertising",
      description:
        "Create engaging shopping experiences with AI Digital Humans, Virtual Try-On, interactive displays, and personalized assistance.",
    },
    {
      number: "03",
      slug: "corporate",
      title: "Corporate Services",
      description:
        "Transform reception, employee assistance, training, and corporate communication with intelligent AI-powered experiences.",
    },
    {
      number: "04",
      slug: "tourism",
      title: "Tourism & Exhibitions",
      description:
        "Engage visitors with multilingual AI guides, interactive digital humans, holographic experiences, and immersive displays.",
    },
    {
      number: "05",
      slug: "healthcare",
      title: "Healthcare & Telemedicine",
      description:
        "Support patients and visitors with intelligent virtual assistants, information services, and interactive healthcare experiences.",
    },
    {
      number: "06",
      slug: "education",
      title: "Education & Training",
      description:
        "Create interactive learning experiences with AI tutors, digital instructors, multilingual assistance, and immersive training.",
    },
  ];

  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Industries
        </p>

        {/* Main heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
            AI experiences built
            <br />
            for every industry.
          </h2>

          <p className="max-w-md text-gray-400">
            Transform customer engagement with intelligent AI solutions
            designed for real-world business environments.
          </p>
        </div>

        {/* Industry list */}
        <div className="mt-20 border-t border-white/10">
          {industries.map((industry) => (
            <Link
              key={industry.number}
              href={`/industries/${industry.slug}`}
              className="group grid gap-6 border-b border-white/10 py-10 transition duration-300 hover:bg-white/[0.03] md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:px-6 block"
            >
              <span className="text-sm text-gray-600 font-mono">
                {industry.number}
              </span>

              <h3 className="text-2xl font-medium transition duration-300 group-hover:translate-x-2 group-hover:text-cyan-300 md:text-3xl">
                {industry.title}
              </h3>

              <p className="max-w-lg text-sm leading-6 text-gray-400">
                {industry.description}
              </p>

              <span className="text-xl text-cyan-400 transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom summary banner */}
        <div className="mt-16 text-center">
          <p className="inline-block rounded-2xl border border-cyan-500/30 bg-cyan-950/40 px-6 py-4 text-sm font-medium text-cyan-200 backdrop-blur-md max-w-3xl">
            And more — built for any environment where immersive visual interaction can create a better customer, visitor, or user experience.
          </p>
        </div>
      </div>
    </section>
  );
}