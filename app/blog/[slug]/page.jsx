import { getBlogBySlug } from "../../../lib/data";

export default async function BlogDetail({ params }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600">{blog.date}</p>
      <article
        className="mt-6 prose"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
