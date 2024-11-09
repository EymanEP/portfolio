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

export const runtime = "edge";

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
  title: "Portfolio",
  description: "Eyman Pashaliev's Portfolio",
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
