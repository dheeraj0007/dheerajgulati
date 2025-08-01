import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Optional: Generate static routes
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blogs"));

  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <>
      <div className="p-4 w-full max-w-[600px] mx-auto mt-16 ">
        <Link href={"/blogs"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold my-2">{data.title}</h1>
        <div className="text-gray-500 text-sm flex justify-between ">
          <p className=" mb-6 flex items-center">
            <Image
              src={"/profile.png"}
              width={20}
              height={20}
              alt="dheeraj"
              className="rounded-full mr-2"
            />
            <span>Dheeraj Gulati / {data.date}</span>
          </p>
          <p>{data.readtime} min read</p>
        </div>
        <article className="prose prose-lg">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
}
