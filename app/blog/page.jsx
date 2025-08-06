import BlogCard from "../../components/BlogCard";
import { getBlogs } from "../../lib/data";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6text-teal-500">All Blog Posts</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
