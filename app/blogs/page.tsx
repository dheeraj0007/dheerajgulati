import BlogHeader from "../components/blog/BlogHeader";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

function Blogs() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blogs"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "content/blogs", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });
  console.log(posts);
  return (
    <div>
      <div className="mx-3">
        <BlogHeader />
      </div>
      <div className="p-4 w-full max-w-[600px] mx-auto mt-10">
        <h1 className="font-bold text-2xl md:text-4xl mb-3">All Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-3">
              <Link
                href={`/blogs/${post.slug}`}
                className="flex justify-between bg-gray-200 rounded-md py-3 px-4"
              >
                <p className="hover:underline text-base font-medium">
                  {post.title}
                </p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
