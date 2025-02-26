"use client";
import { useRef } from "react";
import Image from "next/image";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="bg-[#F2F9FF] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Image - Grayscale */}
        <div className="absolute inset-0 z-0">
          <Image
            src="../public/charlotte.jpg"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="grayscale opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
            A Frontend Engineer passionate about building modern and engaging
            web experiences.
          </p>
          <a href="#contact">
            <button className="px-6 py-3 bg-[#E195AB] text-white rounded-full shadow-lg hover:bg-[#FFCCE1] transition duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-[#FFF5D7] px-6"
      >
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-800 max-w-2xl text-center">
          I am a passionate Frontend Developer focused on creating intuitive and
          beautiful web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="h-screen flex flex-col items-center justify-center bg-[#FFCCE1] px-6"
      >
        <h2 className="text-4xl font-semibold mb-4">My Projects</h2>
        <p className="text-lg text-gray-900 max-w-2xl text-center">
          Here are some of the projects I have worked on, showcasing my skills
          in modern frontend development.
        </p>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="h-screen flex flex-col items-center justify-center bg-[#E195AB] px-6 text-white"
      >
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg max-w-2xl text-center">
          Feel free to reach out if you are interested in working together or
          have any questions!
        </p>
      </section>
    </main>
  );
}
