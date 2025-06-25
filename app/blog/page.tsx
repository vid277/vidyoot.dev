import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";

export const metadata = {
  title: "Blog | Vidyoot Senthil",
  description: "Thoughts on software, AI, and more.",
};

export default async function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-gray-800 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-300 pb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              {post.summary && (
                <p className="mt-2 text-gray-700">{post.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
