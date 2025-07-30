// src/components/Contact.js
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <p className="text-center text-lg mb-6">Interested in working together? Reach out below or email me directly.</p>
      <p className="text-center mb-8">
        Email: <a href="mailto:ryanogara03@outlook.com" className="text-blue-600 hover:underline">ryanogara03@outlook.com</a>
      </p>

      <form className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded shadow-md border border-gray-200">
        <div>
          <label htmlFor="name" className="block text-left font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-left font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-left font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="5" className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
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
  );
}