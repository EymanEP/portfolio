"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import EffectButton from "@/components/atoms/EffectButton";
import { useTheme } from "next-themes";
import React from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const toggleTheme = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTheme(theme === "dark" ? "light" : "dark");

    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <EffectButton
      onClickMethod={toggleTheme}
      disabled={isTransitioning}
      className="relative w-10 h-10 flex justify-center items-center p-2 rounded-full group"
      effectDirection="left"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white dark:group-hover:text-black"
          >
            <MoonIcon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-yellow-500"
          >
            <SunIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </EffectButton>
  );
};

export default ThemeButton;
