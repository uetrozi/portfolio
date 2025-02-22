"use client";
import { useRef } from "react";

export default function Navbar() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4">
      <div className="max-w-4xl mx-auto flex justify-between px-6">
        <h1 className="text-xl font-semibold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
