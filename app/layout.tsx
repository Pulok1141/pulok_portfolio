import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
