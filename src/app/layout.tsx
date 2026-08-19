import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Ai",
  description:
    "Production-grade Machine Learning Systems, Biometrics, MLOps Pipelines, and Agentic Generative AI Architectures.",
  keywords: [
    "Nexus Ai",
    "AI Engineer",
    "ML Engineer",
    "MLOps",
    "Generative AI",
    "LangGraph",
    "FastAPI",
    "Apache Airflow",
    "MLflow",
    "Computer Vision",
    "VectorDB",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#05070b] text-[#e2e8f0] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
