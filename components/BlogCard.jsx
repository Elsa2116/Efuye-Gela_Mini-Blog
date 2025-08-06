import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 text-sm">{blog.date}</p>
      <Link
        href={`/blog/${blog.slug}`}
        className="text-blue-600 hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
