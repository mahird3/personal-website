import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mahir Dursunoglu",
  description:
    "AI Engineer & Data Scientist specialized in GenAI, RAG, agents, and MLOps, based in Paris.",
  openGraph: {
    title: "Mahir Dursunoglu",
    description:
      "AI Engineer & Data Scientist specialized in GenAI, RAG, agents, and MLOps, based in Paris.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full`}>
      <body className="min-h-full bg-background font-mono text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
