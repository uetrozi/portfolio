"use client"; // Enables client-side interactivity
import { useRef } from "react";
import Image from "next/image";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F2F9FF] relative">
      {/* Hero Image - Grayscale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="public/Nami%202022%2007%2008--154.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="grayscale opacity-80"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-gray-900">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
          A Frontend Engineer passionate about building modern and engaging web
          experiences.
        </p>
        <a href="#contact">
          <button className="px-6 py-3 bg-[#E195AB] text-white rounded-full shadow-lg hover:bg-[#FFCCE1] transition duration-300">
            Get in Touch
          </button>
        </a>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            My Work
          </button>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        id="about"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        id="projects"
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <h2 className="text-3xl font-semibold">Contact Me</h2>
      </div>
    </section>
  );
}
