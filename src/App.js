import { FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
    <div className="bg-white text-gray-800 text-center max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <img
        src="/headshot.png"
        alt="Ryan O'Gara headshot"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-lg max-w-xl mx-auto mb-4">
        Final-year Software Engineering student at Queen’s University Belfast with industry experience at Liberty IT. 
      </p>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Always learning!
      </p>
      <div className="flex justify-center space-x-6 text-3xl text-gray-700">
        <a href="https://github.com/ryanogara1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ryanog111/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="mailto:ryanogara03@outlook.com" aria-label="Email" className="hover:text-red-500">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
    <div id="projects" className="bg-gray-100 py-12 text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-600">Brief description of the project will go here.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-600">Brief description of the project will go here.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-600">Brief description of the project will go here.</p>
        </div>
      </div>
    </div>

<div id="services" className="bg-white py-12 text-center px-4">
  <h2 className="text-3xl font-bold mb-8">Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-blue-600">📱</div>
      <h3 className="text-xl font-semibold mb-2">Portfolio & Landing Pages</h3>
      <p className="text-gray-700">Clean, responsive, and modern portfolio or landing pages built with React and Tailwind CSS.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-blue-600">🔌</div>
      <h3 className="text-xl font-semibold mb-2">Frontend API Integration</h3>
      <p className="text-gray-700">Interactive frontend development with REST APIs or custom backend integration using modern JavaScript.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-blue-600">⚡</div>
      <h3 className="text-xl font-semibold mb-2">Performance & UX</h3>
      <p className="text-gray-700">Boost your website's performance and user experience through clean, scalable frontend code.</p>
    </div>
  </div>
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