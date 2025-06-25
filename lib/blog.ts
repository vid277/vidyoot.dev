import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPostsMeta(): BlogMeta[] {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.flatMap((file) => {
    if (!file.endsWith(".md")) return [];
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    if (!data.title || !data.slug || !data.date) return [];
    return [
      {
        slug: data.slug as string,
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string | undefined,
      },
    ];
  });
  // sort by date desc
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostContent(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    meta: {
      slug: data.slug as string,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string | undefined,
    },
    contentHtml,
  };
}
