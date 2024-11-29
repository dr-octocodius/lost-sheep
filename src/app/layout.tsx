import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["cyrillic-ext"], variable: "--font-inter" });

const soyuzGrotesk = localFont({
  src: "./fonts/SoyuzGroteskBold.woff",
  variable: "--font-soyuz-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lost Sheep",
  description: "Lost sheep - find your next drawing idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soyuzGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
