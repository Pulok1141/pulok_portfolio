import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mahmudul Hasan Pulok | Portfolio",
  description:
    "Personal portfolio of Mahmudul Hasan Pulok, Computer Science & Engineering Student at Daffodil International University. Building machine learning pipelines and intuitive web applications.",
  keywords: [
    "Mahmudul Hasan Pulok",
    "Portfolio",
    "Computer Science",
    "Machine Learning",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Daffodil International University",
  ],
  authors: [{ name: "Mahmudul Hasan Pulok" }],
  openGraph: {
    title: "Mahmudul Hasan Pulok | Portfolio",
    description:
      "Bridging the gap between complex data engineering and intuitive human-computer interaction.",
    type: "website",
    url: "https://github.com/Pulok1141",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-blue-500 selection:text-white">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors relative selection:bg-blue-600 selection:text-white">
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-70" />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
