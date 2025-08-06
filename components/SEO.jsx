import Head from "next/head";

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || "DevConnect platform"} />
      <meta name="keywords" content="Next.js, Dev, Portfolio, Blog" />
    </Head>
  );
}
