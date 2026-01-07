import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a developer passionate about building clean, functional web applications.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View My Projects
          </Link>
          <Link to="/contact" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Frontend Development</h3>
          <p className="text-gray-600">
            Building modern, responsive web applications with React, Vue, and vanilla JavaScript.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Backend Development</h3>
          <p className="text-gray-600">
            Creating robust APIs and server-side applications with Node.js, Express, and databases.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Full Stack Solutions</h3>
          <p className="text-gray-600">
            Designing and implementing complete web solutions from frontend to backend.
          </p>
        </div>
      </div>
    </div>
  )
}
