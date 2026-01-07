export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Name</h1>
        <p className="text-gray-600 mb-6">Full Stack Developer | Software Engineer</p>
        <div className="border-b-2 border-gray-300 mb-8 pb-4">
          <p className="text-gray-700">Email: your.email@example.com | Phone: (123) 456-7890</p>
          <p className="text-gray-700">LinkedIn: linkedin.com/in/yourprofile | GitHub: github.com/yourprofile</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced full-stack developer with a passion for building modern web applications. Skilled in React, Node.js, and cloud technologies. Proven track record of delivering high-quality software solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Senior Developer</h3>
            <p className="text-gray-600">Tech Company Inc. | 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Led development of React-based SPA serving 10,000+ users</li>
              <li>Implemented microservices architecture using Node.js</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Full Stack Developer</h3>
            <p className="text-gray-600">StartUp Co. | 2020 - 2022</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Built full-stack features from design to deployment</li>
              <li>Optimized database queries reducing load time by 40%</li>
              <li>Collaborated with product team on feature prioritization</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Frontend</h3>
              <p className="text-gray-700">React, JavaScript, TypeScript, Tailwind CSS, HTML/CSS</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Backend</h3>
              <p className="text-gray-700">Node.js, Express, PostgreSQL, MongoDB, REST APIs</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Tools & DevOps</h3>
              <p className="text-gray-700">Git, Docker, GitHub Actions, AWS, Railway</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Other</h3>
              <p className="text-gray-700">Agile, Problem Solving, Communication, Testing</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Education</h2>
          <h3 className="text-lg font-semibold text-slate-900">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University Name | Graduated 2020</p>
        </section>
      </div>
    </div>
  )
}
