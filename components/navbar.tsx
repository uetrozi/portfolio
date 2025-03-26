"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 inset-x-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-16 py-3">
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold tracking-wide">Charlotte Keuer</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["about", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-gray-900 transition-colors text-base font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
