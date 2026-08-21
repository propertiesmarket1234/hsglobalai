import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

console.log("BLOG POSTS COUNT:", blogPosts.length);
console.log(
    "EDGE SLUG:",
    blogPosts.find((post) => post.id === "2")
);
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

console.log(
    "BLOGS WITHOUT SLUG:",
    blogPosts.filter(
        (post) => typeof post.slug !== "string" || post.slug.trim() === ""
    )
);

export default async function BlogPostPage({ params }: BlogPageProps) {
    const { slug } = await params;

    console.log("REQUESTED SLUG:", slug);

    const post = blogPosts.find(
        (item) => String(item.slug).trim() === String(slug).trim()
    );

    console.log("FOUND POST:", post?.title || "NOT FOUND");

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div>
                    <h1 className="text-3xl font-bold">Blog not found</h1>
                    <p className="mt-4">Requested slug: {slug}</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <article className="mx-auto max-w-4xl px-6 py-24">
                <div className="mb-6 text-sm text-cyan-400">
                    {post.category}
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    {post.title}
                </h1>

                <div className="mt-6 text-sm text-white/60">
                    {post.date} · {post.readTime} · {post.author}
                </div>

                {post.bannerImage && (
                    <img
                        src={post.bannerImage}
                        alt={post.title}
                        className="mt-10 w-full rounded-2xl"
                    />
                )}

                <div className="mt-10 whitespace-pre-line text-lg leading-8 text-white/80">
                    {post.content}
                </div>
            </article>
        </main>
    );
}