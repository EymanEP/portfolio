import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import GrowingCircleAnimation from "@/components/animations/GrowingCircleAnimation";

const jetBrainsMono = localFont({
    src: "./fonts/JetBrainsMono.ttf",
    variable: "--font-jetbrains-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Eyman Pashaliev's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`m-0 overflow-x-hidden`}>
      <body
        className={`${jetBrainsMono.variable} antialiased flex flex-col justify-between min-h-dvh`}
      >
      <GrowingCircleAnimation />
      <Navbar />
      <main className={`flex-1`}>
        {children}
      </main>
      </body>
    </html>
  );
}
