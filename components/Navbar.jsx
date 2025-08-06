import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 flex justify-between items-center shadow-lg">
      <Link
        href="/"
        className="text-3xl font-extrabold hover:text-yellow-300 transition-colors duration-300"
      >
        DevConnect
      </Link>

      <div className="flex space-x-12 text-lg font-semibold">
        <Link
          href="/projects"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
