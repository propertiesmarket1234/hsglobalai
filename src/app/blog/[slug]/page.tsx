import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { blogPosts } from "@/data/blogPosts";

export const dynamicParams = true;

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => String(item.slug).trim() === String(slug).trim());

  if (!post) {
    return {
      title: "Article Not Found | HS Global AI",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} | HS Global AI`,
    description: post.snippet,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.snippet,
      type: "article",
      url: `https://hsglobalai.com/blog/${post.slug}`,
      images: [
        {
          url: post.bannerImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.snippet,
      images: [post.bannerImage],
    },
  };
}

/** Helper function to parse bold markdown text (**text**) */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(
    (item) => String(item.slug).trim() === String(slug).trim()
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md border border-cyan-500/30 rounded-3xl p-10 bg-neutral-950/80 backdrop-blur-xl">
          <span className="text-5xl">🔍</span>
          <h1 className="mt-4 text-3xl font-bold">Article Not Found</h1>
          <p className="mt-2 text-sm text-gray-400">
            No article matches the requested URL: <code className="text-cyan-400">{slug}</code>
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-bold text-black transition hover:bg-cyan-400"
          >
            ← Back to Blog Hub
          </Link>
        </div>
      </main>
    );
  }

  // Find related articles (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Structured Data (JSON-LD) for Search Engine Indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.snippet,
    "image": post.bannerImage,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "HS Global AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hsglobalai.com/logo.png",
      },
    },
    "keywords": post.tags.join(", "),
  };

  const contentBlocks = post.content.split("\n\n");

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* ARTICLE HERO BANNER */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-cyan-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6">
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog Hub
            </Link>
            <span>/</span>
            <span className="text-cyan-300">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
              {post.category}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-gray-400 border-y border-white/10 py-4">
            <div className="flex items-center gap-2">
              <span className="text-base">{post.icon}</span>
              <span className="font-medium text-gray-200">{post.author}</span>
            </div>
            <span>•</span>
            <time className="font-mono">{post.date}</time>
            <span>•</span>
            <span className="font-mono text-cyan-300">{post.readTime}</span>
          </div>

          {/* Hero Banner Image */}
          {post.bannerImage && (
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/15 relative h-72 sm:h-96 w-full shadow-2xl bg-neutral-900">
              <Image
                src={post.bannerImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE CONTENT CONTAINER */}
      <section className="relative px-6 pb-24">
        <article className="mx-auto max-w-4xl leading-8 text-gray-200">
          {contentBlocks.map((block, idx) => {
            const trimmed = block.trim();

            // 1. EXECUTIVE SUMMARY & KEY TAKEAWAYS CALLOUT BOX
            if (trimmed.startsWith("> Executive Summary") || trimmed.startsWith("> ")) {
              const lines = trimmed
                .split("\n")
                .map((l) => l.replace(/^>\s*/, "").trim())
                .filter((l) => l.startsWith("- ") || (l.length > 0 && !l.toLowerCase().includes("executive summary")));
              return (
                <div
                  key={idx}
                  className="my-10 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 via-neutral-950 to-blue-950/30 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 h-32 w-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3 text-cyan-400 font-bold text-base mb-4 border-b border-cyan-500/20 pb-3">
                    <svg className="w-5 h-5 fill-cyan-400" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span>Key Takeaways & Executive Summary</span>
                  </div>
                  <ul className="space-y-3 text-sm md:text-base text-gray-200">
                    {lines.map((line, lIdx) => {
                      return (
                        <li key={lIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          <span>{renderFormattedText(line.replace(/^-\s*/, ""))}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }

            // 2. MID-ARTICLE CTA CARD TRIGGER
            if (trimmed === "[CTA_CARD_INLINE]") {
              return (
                <div
                  key={idx}
                  className="my-12 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/80 via-neutral-950 to-blue-950/80 p-8 md:p-10 text-center shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
                      <svg className="w-3.5 h-3.5 fill-cyan-300" viewBox="0 0 24 24">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                      </svg>
                      Live Interactive Avatar Demo
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Elevate Your Enterprise with On-Device Digital Humans
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-300">
                      Experience sub-300ms voice dialogue and 100% data privacy on your physical hardware. Book a live walkthrough with our enterprise AI engineering team.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-xs font-bold text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 hover:from-cyan-300 hover:to-blue-400"
                      >
                        <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                        Schedule Live Hologram Demo
                        <span>→</span>
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900/80 px-6 py-3.5 text-xs font-semibold text-gray-200 transition-all hover:border-white/40 hover:text-white"
                      >
                        <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 24 24">
                          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
                        </svg>
                        Request Technical Specs
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // 3. BOTTOM CONVERSION CTA BLOCK TRIGGER
            if (trimmed === "[CTA_BLOCK_BOTTOM]") {
              return (
                <div
                  key={idx}
                  className="my-12 rounded-3xl border border-white/15 bg-neutral-950 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/50 via-neutral-950 to-blue-950/50" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                      Ready to Transform Your Enterprise Operations?
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 leading-7">
                      Join industry leaders deploying DIHUAVA AI Digital Humans for 24/7 autonomous customer reception, knowledge access, and interactive retail.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:bg-cyan-300"
                      >
                        <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                          <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" />
                        </svg>
                        Book a 1-on-1 Strategy Call
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-4 text-xs font-bold uppercase tracking-wider text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400"
                      >
                        <svg className="w-4 h-4 fill-cyan-300" viewBox="0 0 24 24">
                          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                        </svg>
                        Explore DIHUAVA Hardware
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // 4. H2 HEADINGS
            if (trimmed.startsWith("## ")) {
              const titleText = trimmed.replace("## ", "");
              return (
                <h2
                  key={idx}
                  className="mt-14 mb-6 text-2xl md:text-3xl font-bold tracking-tight text-white border-l-4 border-cyan-400 pl-4 py-1"
                >
                  {titleText}
                </h2>
              );
            }

            // 5. H3 HEADINGS (Questions or Subheadings)
            if (trimmed.startsWith("### ")) {
              const fullContent = trimmed.replace("### ", "").trim();

              // If the H3 block contains an inline answer (separated by \n)
              if (fullContent.includes("\n")) {
                const lines = fullContent.split("\n").map((l) => l.trim()).filter(Boolean);
                const question = lines[0];
                const answer = lines.slice(1).join(" ");

                return (
                  <div
                    key={idx}
                    className="my-6 rounded-2xl border border-cyan-500/30 bg-neutral-950/90 p-6 shadow-xl backdrop-blur-md"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-cyan-400 tracking-wide mb-2 flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0 font-mono">Q:</span>
                      <span>{renderFormattedText(question)}</span>
                    </h3>
                    <p className="text-base md:text-lg text-white leading-8 font-normal pl-6 border-l-2 border-cyan-500/30 mt-3">
                      {renderFormattedText(answer)}
                    </p>
                  </div>
                );
              }

              return (
                <h3
                  key={idx}
                  className="mt-10 mb-3 text-xl md:text-2xl font-bold text-cyan-400 tracking-wide"
                >
                  {renderFormattedText(fullContent)}
                </h3>
              );
            }

            // 6. H4 HEADINGS
            if (trimmed.startsWith("#### ")) {
              const titleText = trimmed.replace("#### ", "");
              return (
                <h4
                  key={idx}
                  className="mt-6 mb-3 text-lg font-semibold text-cyan-300"
                >
                  {renderFormattedText(titleText)}
                </h4>
              );
            }

            // 7. HORIZONTAL DIVIDER
            if (trimmed === "---") {
              return <hr key={idx} className="my-10 border-white/10" />;
            }

            // 8. MARKDOWN TABLES
            if (trimmed.startsWith("|")) {
              const rows = trimmed.split("\n").filter((r) => r.trim() !== "");
              return (
                <div key={idx} className="my-8 overflow-x-auto rounded-2xl border border-white/15 bg-neutral-950 p-2 shadow-xl">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead>
                      {rows.slice(0, 1).map((row, rIdx) => {
                        const cols = row.split("|").filter((c) => c.trim() !== "");
                        return (
                          <tr key={rIdx} className="border-b border-cyan-500/30 bg-cyan-500/10 font-bold text-cyan-300">
                            {cols.map((col, cIdx) => (
                              <th key={cIdx} className="py-4 px-5">
                                {col.replace(/\*\*/g, "").trim()}
                              </th>
                            ))}
                          </tr>
                        );
                      })}
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {rows.slice(2).map((row, rIdx) => {
                        const cols = row.split("|").filter((c) => c.trim() !== "");
                        return (
                          <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                            {cols.map((col, cIdx) => (
                              <td key={cIdx} className="py-4 px-5 text-gray-200">
                                {renderFormattedText(col.trim())}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }

            // 9. BULLET LISTS
            if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
              const lines = trimmed.split("\n");
              return (
                <ul key={idx} className="my-6 space-y-3 pl-2">
                  {lines.map((line, lIdx) => {
                    if (line.startsWith("- ")) {
                      const cleanText = line.replace("- ", "");
                      return (
                        <li key={lIdx} className="flex items-start gap-3 text-gray-200 text-base md:text-lg">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          <span>{renderFormattedText(cleanText)}</span>
                        </li>
                      );
                    }
                    return (
                      <p key={lIdx} className="text-white mb-2 text-base md:text-lg">
                        {renderFormattedText(line)}
                      </p>
                    );
                  })}
                </ul>
              );
            }

            // 10. INLINE LINKS OR CTA PARAGRAPHS
            if (trimmed.includes("[") && trimmed.includes("](") && trimmed.includes(")")) {
              const linkText = trimmed.substring(trimmed.indexOf("[") + 1, trimmed.indexOf("]"));
              const linkHref = trimmed.substring(trimmed.indexOf("](") + 2, trimmed.indexOf(")"));
              const precedingText = trimmed.substring(0, trimmed.indexOf("["));

              return (
                <div key={idx} className="my-8 rounded-2xl border border-cyan-500/30 bg-neutral-950 p-6 text-center shadow-lg">
                  {precedingText && (
                    <p className="text-base text-gray-200 mb-4">{renderFormattedText(precedingText)}</p>
                  )}
                  <Link
                    href={linkHref}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-xs font-bold text-black shadow-lg transition hover:bg-cyan-400 hover:scale-105"
                  >
                    {linkText} →
                  </Link>
                </div>
              );
            }

            // 11. REGULAR PARAGRAPHS
            return (
              <p key={idx} className="mb-6 text-base md:text-lg leading-8 text-white font-normal">
                {renderFormattedText(trimmed)}
              </p>
            );
          })}

          {/* TAGS FOOTER */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400 mr-2">Tags:</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                >
                  #{t}
                </span>
              ))}
            </div>

            <Link
              href="/blog"
              className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              ← Back to Knowledge Hub
            </Link>
          </div>
        </article>

        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-7xl mt-24 pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Related Articles</h3>
              <Link href="/blog" className="text-xs font-semibold text-cyan-400 hover:underline">
                View All Articles →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 p-6 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-5">
                      {rel.snippet}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                    <span>{rel.readTime}</span>
                    <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}