export default function ProjectCard({ title, description, technologies, link, github }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
