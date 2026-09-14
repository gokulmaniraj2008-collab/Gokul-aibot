import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import DownloadApp from "@/components/DownloadApp";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Gokul AI — Personal Portfolio & Assistant",
  description: "Gokul's personal portfolio and AI assistant.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
        <ThemeToggle />
        <DownloadApp />
      </body>
    </html>
  );
}
