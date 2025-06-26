import { getPostContent, getAllPostsMeta } from "../../../lib/blog";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  try {
    const { meta, contentHtml } = await getPostContent(slug);
    return (
      <main className="min-h-screen bg-[#f7f5ef] text-gray-800 p-4 md:p-8">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h1>{meta.title}</h1>
          <p className="text-sm text-gray-500">{meta.date}</p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
