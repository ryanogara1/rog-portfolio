// src/components/Hero.js
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-4">
      <header className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Ryan O’Gara</h1>
        <p className="text-lg md:text-xl">
          I enjoy creating modern, responsive, and user-friendly web experiences with a focus on clean and accessible design.
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
  );
}