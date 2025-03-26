import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Charlotte Keuer",
  description:
    "Berlin-based Frontend Engineer with a passion for efficient problem solving ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>{" "}
      </body>
    </html>
  );
}
