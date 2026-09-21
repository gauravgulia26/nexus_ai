import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090A0E" },
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gourav.dev",
  description:
    "Engineering portfolio of Gourav Gulia, Machine Learning Engineer specializing in production ML systems, MLOps pipelines, computer vision forensics, and applied AI.",
  keywords: [
    "Gourav Gulia",
    "Machine Learning Engineer",
    "ML Engineer",
    "MLOps",
    "Computer Vision",
    "FastAPI",
    "DVC",
    "MLflow",
    "Docker",
    "Apache Airflow",
    "VectorDB",
    "LangGraph",
  ],
  authors: [{ name: "Gourav Gulia" }],
  openGraph: {
    title: "Gourav.dev",
    description:
      "Production ML systems, MLOps pipelines, biometric computer vision, and applied AI engineering.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${newsreader.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  var root = document.documentElement;
                  if (theme === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.setAttribute('data-theme', 'dark');
                    root.style.colorScheme = 'dark';
                  } else {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.setAttribute('data-theme', 'light');
                    root.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans antialiased min-h-screen overflow-x-hidden selection:bg-[var(--accent-tint)] selection:text-[var(--accent-primary)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
