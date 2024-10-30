import type {Metadata} from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/organisms/Navbar";
import React from "react";
import NextThemeProvider from "@/app/Providers/NextThemeProvider";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

const jetBrainsMono = localFont({
    src: "../fonts/JetBrainsMono.ttf", variable: "--font-jetbrains-mono", weight: "100 900",
})

export const metadata: Metadata = {
    title: "Portfolio", description: "Eyman Pashaliev's Portfolio",
};

interface Props {
    children: React.ReactNode;
    params: { locale:string };
}

export default async function RootLayout({children, params}: Props) {
    const {locale} = await params;
    const messages = await getMessages();
    return (
        <html lang={locale} className="m-0 overflow-x-hidden" suppressHydrationWarning>
        <body
            className={`${jetBrainsMono.variable} antialiased transition-all duration-300`}
        >
        <NextIntlClientProvider messages={messages}>
            <NextThemeProvider>
                <main className="flex-1 mt-20">
                    <Navbar/>
                    {children}
                </main>
            </NextThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
