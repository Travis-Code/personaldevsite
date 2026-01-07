import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition">
          Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-400 transition">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
