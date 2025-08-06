// lib/data.js

export async function getBlogs() {
  return [
    {
      id: 1,
      slug: "nextjs-routing",
      title: "Next.js Routing Explained",
      date: "2025-08-01",
      content: "<p>Routing in Next.js is powerful and flexible...</p>",
    },
    {
      id: 2,
      slug: "nextjs-data-fetching",
      title: "Data Fetching in Next.js",
      date: "2025-08-02",
      content: "<p>There are several data fetching methods...</p>",
    },
    {
      id: 3,
      slug: "nextjs-seo",
      title: "SEO in Next.js",
      date: "2025-08-03",
      content: "<p>SEO can be optimized using the Head component...</p>",
    },
  ];
}

export async function getBlogBySlug(slug) {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug);
}
