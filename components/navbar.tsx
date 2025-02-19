import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 border-b">
      <h1 className="text-xl font-semibold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
