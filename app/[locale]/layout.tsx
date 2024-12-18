import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/organisms/Navbar";
import React from "react";
import NextThemeProvider from "@/app/Providers/NextThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ScrollProgress from "@/components/atoms/ScrollProgress";
import ReactLenis from "lenis/react";

const jetBrainsMono = localFont({
  src: "../fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

const playfairDisplay = localFont({
  src: "../fonts/PlayfairDisplay.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});

const geistVF = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-VF",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geistMono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eyman - Web developer",
  description:
    "Portfolio of Eyman Pashaliev, a web developer specializing in frontend with tools like Angular, React and Vue, and backend like Spring Boot and Java.",
  keywords: [
    "Portfolio",
    "Eyman",
    "Pashaliev",
    "Web developer",
    "Frontend",
    "Backend",
    "React",
    "Vue",
    "Angular",
    "Next.js",
    "Tailwind",
    "Java",
    "Spring Boot",
    "Javascript",
    "Typescript",
  ],
  authors: [
    { name: "Eyman Pashaliev", url: "https://www.eyman-pashaliev.dev" },
  ],
  creator: "Eyman Pashaliev",
  openGraph: {
    title: "Eyman - Web Developer",
    description:
      "Explore Eyman Pashaliev's portfolio of web development project and skills.",
    url: "https://www.eyman-pashaliev.dev",
    siteName: "Eyman - Web Developer",
    images: [
      {
        url: "/favicon/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Eyman - Web Developer",
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className="m-0 overflow-x-hidden"
      suppressHydrationWarning={true}
    >
      <body
        className={`${jetBrainsMono.variable} ${playfairDisplay.variable} 
            ${geistMono.variable} ${geistVF.variable} 
            antialiased transition-all duration-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <NextThemeProvider>
            <main>
              <ReactLenis root>
                <Navbar />
                <ScrollProgress />
                {children}
              </ReactLenis>
            </main>
          </NextThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
