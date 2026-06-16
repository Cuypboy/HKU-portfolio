import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HKU Portfolio - Joep Cuypers",
  description: "Portfolio voor de HKU-toelating van Joep Cuypers."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
