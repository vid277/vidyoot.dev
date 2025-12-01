import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

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
  const processed = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
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
