"use client"; // Enables client-side interactivity
import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="text-center py-10">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Hello, I'm Charlotte 👋</h1>
        <p className="text-lg text-gray-600 mt-4">
          A Frontend Engineer passionate about modern, performant web applications.
        </p>
        <div className="mt-6 space-x-4">
          <button onClick={() => scrollToSection(aboutRef)} className="px-4 py-2 bg-blue-500 text-white rounded">
            About Me
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="px-4 py-2 bg-gray-800 text-white rounded">
            My Work
          </button>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-semibold">About Me</h2>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} id="projects" className="h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
      </div>
    </section>
  );
}
