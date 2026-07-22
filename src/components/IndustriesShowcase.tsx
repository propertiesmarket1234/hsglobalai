const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    description:
      "Transform customer service with intelligent AI experiences designed for secure, efficient, and personalized financial interactions.",
    features: [
      "AI Customer Assistance",
      "Multilingual Support",
      "Digital Banking Guidance",
      "24/7 Interaction",
    ],
  },
  {
    number: "02",
    title: "Retail & Advertising",
    description:
      "Create engaging retail experiences with AI Digital Humans, interactive product discovery, Virtual Try-On, and intelligent customer assistance.",
    features: [
      "Virtual Try-On",
      "Product Discovery",
      "AI Sales Assistance",
      "Interactive Advertising",
    ],
  },
  {
    number: "03",
    title: "Corporate Services",
    description:
      "Improve workplace and visitor experiences with intelligent AI assistants for information, communication, onboarding, and business support.",
    features: [
      "Digital Reception",
      "Employee Assistance",
      "Visitor Guidance",
      "Knowledge Support",
    ],
  },
  {
    number: "04",
    title: "Tourism & Exhibitions",
    description:
      "Deliver immersive visitor experiences with multilingual AI guides, holographic assistants, and interactive information systems.",
    features: [
      "Virtual Guides",
      "Multilingual Assistance",
      "Interactive Exhibitions",
      "Visitor Information",
    ],
  },
  {
    number: "05",
    title: "Healthcare & Telemedicine",
    description:
      "Support patients and healthcare environments with intelligent digital assistants designed for accessible information and guided interactions.",
    features: [
      "Patient Assistance",
      "Healthcare Guidance",
      "Multilingual Support",
      "Digital Information",
    ],
  },
  {
    number: "06",
    title: "Education & Training",
    description:
      "Create interactive learning experiences using AI Digital Humans, intelligent tutors, multilingual education, and immersive training.",
    features: [
      "AI Tutors",
      "Interactive Learning",
      "Multilingual Education",
      "Training Assistance",
    ],
  },
];

export default function IndustriesShowcase() {
  return (
    <section className="bg-black px-6 text-white">
      <div className="mx-auto max-w-7xl">
        {industries.map((industry) => (
          <div
            key={industry.number}
            className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-2 md:gap-20"
          >
            {/* LEFT */}
            <div>
              <p className="mb-8 text-sm tracking-[0.3em] text-slate-500">
                {industry.number}
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                {industry.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                {industry.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {industry.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="mt-10 inline-block font-medium transition hover:opacity-70"
              >
                Explore {industry.title} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}