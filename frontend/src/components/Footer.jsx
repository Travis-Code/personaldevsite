export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <p>&copy; {year} My Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
