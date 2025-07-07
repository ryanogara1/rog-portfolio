function App() {
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-4">
      <header className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Ryan O’Gara</h1>
        <p className="text-lg md:text-xl">
          A passionate software engineer focused on building modern, responsive, and user-friendly web experiences.
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
        >
          Work With Me
        </a>
      </header>
      <div className="mt-10 animate-bounce">
  <a href="#about" className="text-white text-5xl">↓</a>
</div>
    </div>
    <div className="bg-white text-gray-800 text-center max-w-4xl mx-auto py-12 space-y-4 px-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-lg">
        I’m a final-year software engineering student with a passion for creating clean, responsive, and user-focused applications.
      </p>
      <ul className = "flex flex-wrap justify-center gap-4 mt-4">
        <li className="bg-gray-100 px-4 py-2 rounded">React</li>
        <li className="bg-gray-100 px-4 py-2 rounded">JavaScript</li>
        <li className="bg-gray-100 px-4 py-2 rounded">Git</li>
        <li className="bg-gray-100 px-4 py-2 rounded">TypeScript</li>
      </ul>
    </div>
    <div id="projects" className="bg-gray-100 py-12 text-center">
  <h2 className="text-3xl font-bold mb-4">Projects</h2>
  <p className="text-lg">Coming soon...</p>
</div>

<div id="services" className="bg-white py-12 text-center">
  <h2 className="text-3xl font-bold mb-4">Services</h2>
  <p className="text-lg">Coming soon...</p>
</div>

<div id="contact" className="bg-gray-100 py-12 text-center">
  <h2 className="text-3xl font-bold mb-4">Contact</h2>
  <p className="text-lg">Coming soon...</p>
</div>

<footer className="bg-gray-800 text-white py-4 text-center">
  <p>© {new Date().getFullYear()} Ryan O'Gara — Built with React & Tailwind CSS</p>
</footer>
    </>
  );
}

export default App;