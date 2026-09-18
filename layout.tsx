import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reaper — Minecraft Developer",
  description: "Portfolio of Reaper — Minecraft server developer, video editor and website builder.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}