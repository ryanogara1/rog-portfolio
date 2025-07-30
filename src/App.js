import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Ryan O'Gara — Built with React & Tailwind CSS</p>
      </footer>
    </>
  );
}

export default App;