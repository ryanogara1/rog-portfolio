// src/components/About.js
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white text-gray-800 text-center max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <img
        src="/headshot.png"
        alt="Ryan O'Gara headshot"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-[center_30%]"
      />
      <p className="text-lg max-w-xl mx-auto mb-4">
        Final-year Software Engineering student at Queen’s University Belfast with industry experience at Liberty IT. 
      </p>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Always learning!
      </p>
      <div className="flex justify-center space-x-6 text-3xl text-gray-700">
        <a
          href="https://github.com/ryanogara1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ryanog111/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:ryanogara03@outlook.com"
          aria-label="Email"
          className="hover:text-red-500"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}