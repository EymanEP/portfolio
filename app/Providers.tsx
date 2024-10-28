"use client"

import {ThemeProvider} from "next-themes";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function Providers({children}: Props) {
    return (
        <ThemeProvider attribute="class" enableSystem>{children}</ThemeProvider>
    )
}