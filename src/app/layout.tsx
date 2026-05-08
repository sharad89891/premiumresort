import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lumina Azure | Premium Luxury Resort & Spa",
  description: "Experience the ultimate in luxury and relaxation at Lumina Azure Resort. Private villas, world-class dining, and exclusive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
