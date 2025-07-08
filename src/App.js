import { FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 800});
  }, []);
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

<div id="contact" className="bg-gray-100 py-12 px-4">
  <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
  <p className="text-center text-lg mb-6">Interested in working together? Reach out below or email me directly.</p>
  <p className="text-center mb-8">
    Email: <a href="mailto:ryanogara03@outlook.com" className="text-blue-600 hover:underline">ryanogara03@outlook.com</a>
  </p>
  <form 
  data-aos="fade-up"
  className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded shadow-md border border-gray-200">
    <div>
      <label htmlFor="name" className="block text-left font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-left font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-left font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
  <div className="mt-4 text-center">
    <div className="my-6 flex items-center justify-center text-gray-500">
  <hr className="border-t border-gray-300 w-1/5 mr-2" />
  <span className="text-sm">or</span>
  <hr className="border-t border-gray-300 w-1/5 ml-2" />
</div>
    <a
      href="https://www.linkedin.com/in/ryanog111/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      <FaLinkedin className="mr-2" />
      Connect with me on LinkedIn
    </a>
  </div>
</div>

<footer className="bg-gray-800 text-white py-4 text-center">
  <p>© {new Date().getFullYear()} Ryan O'Gara — Built with React & Tailwind CSS</p>
</footer>
    </>
  );
}

export default App;