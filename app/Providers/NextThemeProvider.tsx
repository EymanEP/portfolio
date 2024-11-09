"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function NextThemeProvider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
