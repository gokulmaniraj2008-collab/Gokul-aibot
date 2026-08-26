import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gokul AI — Personal Portfolio & Assistant",
  description: "Gokul's personal portfolio and AI assistant.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
