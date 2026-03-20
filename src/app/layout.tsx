import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crick Crack — Caribbean Literacy Adventure",
  description: "A world-class literacy app celebrating Caribbean culture through interactive stories, phonics games, and adaptive learning for all ages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-sand font-body text-brand-night">{children}</body>
    </html>
  );
}
