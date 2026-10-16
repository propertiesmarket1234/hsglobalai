import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";

export const dynamicParams = true;

interface BlogPageProps {
  params: Promise<{
    lang?: string;
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

  const baseUrl = "https://www.hsglobalai.com";

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested blog article could not be found.",
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
    };
  }

  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const bannerImageUrl = post.bannerImage.startsWith("http")
    ? post.bannerImage
    : `${baseUrl}${post.bannerImage.startsWith("/") ? "" : "/"}${post.bannerImage}`;

  return {
    title: post.title,
    description: post.snippet,
    keywords: post.tags,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.snippet,
      type: "article",
      url: articleUrl,
      images: [
        {
          url: bannerImageUrl,
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
      images: [bannerImageUrl],
    },
  };
}

/** Helper function to parse bold markdown text (**text**) and inline links ([text](url)) */
function renderFormattedText(text: string, lPath: (p: string) => string) {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[var(--lp-ink)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const linkText = part.substring(1, part.indexOf("]("));
      const linkHref = part.substring(part.indexOf("](") + 2, part.length - 1);
      return (
        <Link
          key={index}
          href={lPath(linkHref)}
          className="text-[var(--lp-accent)] hover:underline font-semibold transition-colors"
        >
          {linkText}
        </Link>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { lang, slug } = await params;
  const currentLocale: Locale =
    lang && (nonDefaultLocales as readonly string[]).includes(lang)
      ? (lang as Locale)
      : "en";
  const dict = getDictionary(currentLocale);
  const bPage = (dict as any).blogPage || {};

  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  const post = blogPosts.find(
    (item) => String(item.slug).trim() === String(slug).trim()
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md border border-[var(--lp-line)] rounded-[28px] p-10 bg-[var(--lp-card)] shadow-xs">
          <BookOpen className="h-12 w-12 text-[var(--lp-muted)] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[var(--lp-ink)]">{bPage.notFoundTitle || "Article Not Found"}</h1>
          <p className="mt-2 text-sm text-[var(--lp-ink-2)]">
            {bPage.notFoundDesc || "No article matches the requested URL:"} <code className="text-[var(--lp-accent)] font-mono">{slug}</code>
          </p>
          <Link
            href={lPath("/blog")}
            className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs sm:text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{(bPage.backToHub || "Back to Blog Hub").replace(/^[←\s]+/, "")}</span>
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
    headline: post.title,
    description: post.snippet,
    image: post.bannerImage,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "HS Global AI",
      logo: {
        "@type": "ImageObject",
        url: "https://hsglobalai.com/logo.png",
      },
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hsglobalai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.hsglobalai.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.hsglobalai.com/blog/${post.slug}`,
      },
    ],
  };

  const contentBlocks = post.content.split("\n\n");

  // Extract FAQ items for FAQPage JSON-LD schema
  const faqItems = contentBlocks
    .filter((b) => b.trim().startsWith("### ") && b.trim().includes("\n"))
    .map((b) => {
      const fullContent = b.trim().replace("### ", "").trim();
      const lines = fullContent.split("\n").map((l) => l.trim()).filter(Boolean);
      const question = lines[0].replace(/\*\*/g, "").replace(/^Q:\s*/i, "").trim();
      const answer = lines.slice(1).join(" ").replace(/\*\*/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").trim();
      return { question, answer };
    });

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-[var(--lp-bg)] text-[var(--lp-ink)] selection:bg-[var(--lp-accent)] selection:text-white">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />

      {/* ARTICLE HERO BANNER */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 px-4 sm:px-6 border-b border-[var(--lp-line)]">
        <div className="relative mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--lp-muted)] mb-6">
            <Link href={lPath("/blog")} className="hover:text-[var(--lp-ink)] transition-colors">
              {bPage.breadcrumbHub || "Blog Hub"}
            </Link>
            <span>/</span>
            <span className="text-[var(--lp-ink)] font-semibold">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3.5 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lp-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lp-accent)]" />
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-ink-2)]">
              {post.category}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--lp-ink)] sm:text-5xl lg:text-6xl leading-[1.12]">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[var(--lp-muted)] border-y border-[var(--lp-line)] py-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--lp-ink)]">{post.author}</span>
            </div>
            <span>•</span>
            <time className="font-mono">{post.date}</time>
            <span>•</span>
            <span className="font-mono text-[var(--lp-ink)]">{post.readTime}</span>
          </div>

          {/* Hero Banner Image */}
          {post.bannerImage && (
            <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--lp-line)] relative h-72 sm:h-96 w-full shadow-xs bg-[var(--lp-tile)]">
              <Image
                src={post.bannerImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE CONTENT CONTAINER */}
      <section className="relative px-4 py-16 sm:px-6">
        <article className="mx-auto max-w-4xl leading-relaxed text-[var(--lp-ink-2)]">
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
                  className="my-10 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 md:p-8 shadow-xs relative overflow-hidden"
                >
                  <div className="flex items-center gap-2.5 text-[var(--lp-ink)] font-bold text-base mb-4 border-b border-[var(--lp-line)] pb-3">
                    <Sparkles className="w-5 h-5 text-[var(--lp-accent)]" />
                    <span>{bPage.keyTakeawaysTitle || "Key Takeaways & Executive Summary"}</span>
                  </div>
                  <ul className="space-y-3 text-sm md:text-base text-[var(--lp-ink-2)]">
                    {lines.map((line, lIdx) => {
                      return (
                        <li key={lIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lp-accent)]" />
                          <span>{renderFormattedText(line.replace(/^-\s*/, ""), lPath)}</span>
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
                  className="my-12 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-tile)] p-8 md:p-10 text-center shadow-xs relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-3.5 py-1 text-xs font-semibold text-[var(--lp-ink)] mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--lp-accent)]" />
                      {bPage.inlineCtaBadge || "Interactive Avatar Architecture"}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--lp-ink)] tracking-tight">
                      {bPage.inlineCtaHeading || "Elevate Your Enterprise with On-Device Digital Humans"}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--lp-ink-2)]">
                      {bPage.inlineCtaDesc ||
                        "Experience low-latency voice dialogue and 100% data privacy on your physical hardware. Book a live walkthrough with our enterprise AI engineering team."}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <Link
                        href={lPath("/contact")}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs sm:text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{bPage.inlineCtaBtn1 || "Schedule Live Hologram Demo"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={lPath("/contact/download-center")}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-[var(--lp-card)] px-5 text-xs sm:text-[14px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{bPage.inlineCtaBtn2 || "Request Technical Specs"}</span>
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
                  className="my-12 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-8 md:p-12 text-center shadow-xs relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold text-[var(--lp-ink)] tracking-tight">
                      {bPage.bottomCtaHeading || "Ready to Transform Your Enterprise Operations?"}
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--lp-ink-2)] leading-relaxed">
                      {bPage.bottomCtaDesc ||
                        "Join industry leaders deploying DIHUAVA AI Digital Humans for 24/7 autonomous customer reception, knowledge access, and interactive retail."}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        href={lPath("/contact")}
                        className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-6 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{bPage.bottomCtaBtn1 || "Book a 1-on-1 Strategy Call"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={lPath("/products")}
                        className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--lp-line)] bg-white px-6 text-sm sm:text-[15px] font-semibold text-[var(--lp-ink)] shadow-xs transition-all hover:bg-[var(--lp-tile)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>{bPage.bottomCtaBtn2 || "Explore Hardware Solutions"}</span>
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
                  className="mt-12 mb-5 text-2xl md:text-3xl font-bold tracking-tight text-[var(--lp-ink)] border-l-4 border-[var(--lp-accent)] pl-4 py-1"
                >
                  {titleText}
                </h2>
              );
            }

            // 5. H3 HEADINGS
            if (trimmed.startsWith("### ")) {
              const titleText = trimmed.replace("### ", "");
              return (
                <h3
                  key={idx}
                  className="mt-8 mb-3 text-xl font-bold text-[var(--lp-ink)]"
                >
                  {titleText}
                </h3>
              );
            }

            // 6. H4 HEADINGS
            if (trimmed.startsWith("#### ")) {
              const titleText = trimmed.replace("#### ", "");
              return (
                <h4
                  key={idx}
                  className="mt-6 mb-2 text-base font-semibold text-[var(--lp-ink)]"
                >
                  {titleText}
                </h4>
              );
            }

            // 7. HORIZONTAL DIVIDERS
            if (trimmed === "---") {
              return <hr key={idx} className="my-8 border-[var(--lp-line)]" />;
            }

            // 8. TABLES
            if (trimmed.startsWith("|")) {
              const rows = trimmed.split("\n");
              return (
                <div key={idx} className="my-8 overflow-x-auto rounded-[20px] border border-[var(--lp-line)] bg-[var(--lp-card)] shadow-xs">
                  <table className="w-full text-left text-xs">
                    <thead>
                      {rows.slice(0, 1).map((row, rIdx) => {
                        const cols = row.split("|").filter((c) => c.trim() !== "");
                        return (
                          <tr key={rIdx} className="border-b border-[var(--lp-line)] bg-[var(--lp-tile)] font-bold text-[var(--lp-ink)]">
                            {cols.map((col, cIdx) => (
                              <th key={cIdx} className="py-3.5 px-4">
                                {col.replace(/\*\*/g, "").trim()}
                              </th>
                            ))}
                          </tr>
                        );
                      })}
                    </thead>
                    <tbody className="divide-y divide-[var(--lp-line)]">
                      {rows.slice(2).map((row, rIdx) => {
                        const cols = row.split("|").filter((c) => c.trim() !== "");
                        return (
                          <tr key={rIdx} className="hover:bg-[var(--lp-tile)]/50 transition-colors">
                            {cols.map((col, cIdx) => (
                              <td key={cIdx} className="py-3.5 px-4 text-[var(--lp-ink-2)]">
                                {renderFormattedText(col.trim(), lPath)}
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
                <ul key={idx} className="my-6 space-y-2.5 pl-2">
                  {lines.map((line, lIdx) => {
                    if (line.startsWith("- ")) {
                      const cleanText = line.replace("- ", "");
                      return (
                        <li key={lIdx} className="flex items-start gap-2.5 text-[var(--lp-ink-2)] text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lp-accent)]" />
                          <span>{renderFormattedText(cleanText, lPath)}</span>
                        </li>
                      );
                    }
                    return (
                      <p key={lIdx} className="text-[var(--lp-ink)] mb-2 text-base">
                        {renderFormattedText(line, lPath)}
                      </p>
                    );
                  })}
                </ul>
              );
            }

            // 10. STANDALONE CTA BUTTON PARAGRAPHS
            if (trimmed.startsWith("[") && trimmed.endsWith(")") && !trimmed.includes("\n") && trimmed.split("](").length === 2) {
              const linkText = trimmed.substring(1, trimmed.indexOf("]("));
              const linkHref = trimmed.substring(trimmed.indexOf("](") + 2, trimmed.length - 1);

              return (
                <div key={idx} className="my-8 rounded-2xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-6 text-center">
                  <Link
                    href={lPath(linkHref)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--lp-ink)] px-5 text-xs sm:text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            }

            // 11. REGULAR PARAGRAPHS
            return (
              <p key={idx} className="mb-5 text-base leading-relaxed text-[var(--lp-ink-2)]">
                {renderFormattedText(trimmed, lPath)}
              </p>
            );
          })}

          {/* TAGS FOOTER */}
          <div className="mt-14 pt-6 border-t border-[var(--lp-line)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--lp-muted)] mr-1">{bPage.tagsLabel || "Tags:"}</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-0.5 text-xs text-[var(--lp-ink-2)]"
                >
                  #{t}
                </span>
              ))}
            </div>

            <Link
              href={lPath("/blog")}
              className="text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors inline-flex items-center gap-1.5"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>{(bPage.backToKnowledgeHub || "Back to Knowledge Hub").replace(/^[←\s]+/, "")}</span>
            </Link>
          </div>
        </article>

        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-[1200px] mt-20 pt-14 border-t border-[var(--lp-line)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[var(--lp-ink)]">
                {bPage.relatedArticlesTitle || "Related Articles"}
              </h3>
              <Link
                href={lPath("/blog")}
                className="text-xs font-semibold text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{(bPage.viewAllArticles || "View All Articles").replace(/[\s→]+$/, "")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={lPath(`/blog/${rel.slug}`)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 shadow-xs hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[var(--lp-accent)] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-[var(--lp-ink)] group-hover:text-[var(--lp-accent)] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="mt-2 text-xs text-[var(--lp-ink-2)] line-clamp-2 leading-relaxed">
                      {rel.snippet}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--lp-line)] flex items-center justify-between text-xs text-[var(--lp-muted)]">
                    <span className="font-mono">{rel.readTime}</span>
                    <span className="text-[var(--lp-ink)] font-semibold group-hover:text-[var(--lp-accent)] group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                      <span>{bPage.readShort || "Read"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
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