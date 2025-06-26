import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";

export const metadata = {
  title: "Blog | Vidyoot Senthil",
  description: "Thoughts on software, AI, and more.",
};

export default async function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#fdfcf8] via-[#f7f5ef] to-[#faf8f3]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="relative z-10 min-h-screen flex flex-col p-4 pt-8 sm:p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
          <div className="font-mono text-xs sm:text-sm space-y-8 flex-1">
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-800 text-xs sm:text-sm font-bold">
                  vidyoot@blog:~$
                </span>
              </div>

              <Link
                href="/"
                className="px-3 py-2 bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 group text-xs sm:text-sm font-bold"
                title="Back to Home"
              >
                cd ~
              </Link>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <p className="text-green-700 font-bold text-sm">$ ls blog/</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-4 text-black">
                  Blog Posts
                </h1>
              </div>

              <div className="flex-1">
                <p className="text-green-700 font-bold mb-3 text-sm">
                  $ cat posts.txt
                </p>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.slug}
                      className="border-b-2 border-black pb-4 last:border-b-0"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-700 hover:text-blue-800 text-sm font-semibold hover:underline block"
                      >
                        • {post.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1 ml-4">
                        Date: {post.date}
                      </p>
                      {post.summary && (
                        <p className="text-xs text-gray-700 mt-2 ml-4">
                          {post.summary}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t-2 border-black pt-4">
                <p className="text-green-700 font-bold text-sm">
                  $ wc -l posts.txt
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  Total posts: {posts.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
