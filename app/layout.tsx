import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import React from "react";
import Providers from "./Providers"

const jetBrainsMono = localFont({
    src: "./fonts/JetBrainsMono.ttf", variable: "--font-jetbrains-mono", weight: "100 900",
})

export const metadata: Metadata = {
    title: "Portfolio", description: "Eyman Pashaliev's Portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="m-0 overflow-x-hidden" suppressHydrationWarning>
        <body
            className={`${jetBrainsMono.variable} antialiased transition-all duration-300`}
        >
        <Providers>
            <main className="flex-1 mt-20">
                <Navbar/>
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
