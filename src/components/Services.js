// src/components/Services.js
export default function Services() {
  return (
    <div id="services" className="bg-white py-12 text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4 text-blue-600">📱</div>
          <h3 className="text-xl font-semibold mb-2">Portfolio & Landing Pages</h3>
          <p className="text-gray-700">
            Clean, responsive, and modern portfolio or landing pages built with React and Tailwind CSS.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4 text-blue-600">🔌</div>
          <h3 className="text-xl font-semibold mb-2">Frontend API Integration</h3>
          <p className="text-gray-700">
            Interactive frontend development with REST APIs or custom backend integration using modern JavaScript.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4 text-blue-600">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Performance & UX</h3>
          <p className="text-gray-700">
            Boost your website's performance and user experience through clean, scalable frontend code.
          </p>
        </div>
      </div>
    </div>
  );
}