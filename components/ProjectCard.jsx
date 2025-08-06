// components/ProjectCard.jsx
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.url && (
        <Link href={project.url}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project →
          </a>
        </Link>
      )}
    </div>
  );
}
