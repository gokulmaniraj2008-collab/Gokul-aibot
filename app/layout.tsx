import type { Metadata } from "next";
import "./globals.css";
import DownloadApp from "@/components/DownloadApp";

export const metadata: Metadata = {
  title: "Gokul AI — Personal Portfolio & Assistant",
  description: "Gokul's personal portfolio and AI assistant.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DownloadApp />
      </body>
    </html>
  );
}
