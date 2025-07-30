// src/components/Projects.js
export default function Projects() {
  return (
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
  );
}