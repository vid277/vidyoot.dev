import { getPostContent, getAllPostsMeta } from "../../../lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

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
      <section className="relative min-h-screen bg-gradient-to-br from-[#fdfcf8] via-[#f7f5ef] to-[#faf8f3]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

        <div className="relative z-10 min-h-screen flex flex-col p-4 pt-8 sm:p-4 md:p-8">
          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
            <div className="font-mono text-xs sm:text-sm space-y-8 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 text-xs sm:text-sm font-bold">
                    vidyoot@blog:~$
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/blog"
                    className="px-3 py-2 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group text-xs sm:text-sm font-bold"
                    title="Back to Blog"
                  >
                    cd blog
                  </Link>

                  <Link
                    href="/"
                    className="px-3 py-2 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group text-xs sm:text-sm font-bold"
                    title="Back to Home"
                  >
                    cd ~
                  </Link>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-green-700 font-bold text-sm">
                    $ cat {slug}.md
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-2 text-black">
                    {meta.title}
                  </h1>
                  <p className="text-xs text-gray-500 mb-4">
                    Date: {meta.date}
                  </p>
                </div>

                <div className="flex-1">
                  <div
                    className="prose-sm sm:prose-base max-w-none text-black space-y-4 prose"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
