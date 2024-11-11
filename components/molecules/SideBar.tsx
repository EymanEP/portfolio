"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import NavbarTabs from "@/data/NavbarTabs";
import { usePathname, useRouter } from "next/navigation";
import { scrollToHTMLElement } from "@/utils/scrollUtils";

type EventAnchorType = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

interface SideBarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ sideBar = false, setSideBar }) => {
  const t = useTranslations("navbar.links");
  const pathname = usePathname();
  const router = useRouter();

  const handleAnchorClick = (e: EventAnchorType, link: string) => {
    setSideBar(false);

    if (link.startsWith("#")) {
      e.preventDefault();
      if (pathname === "/en" || pathname === "/es" || pathname === "/bg") {
        scrollToHTMLElement(link);
      } else {
        router.push(`/${link}`);
      }
    }
  };
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed rounded-xl tracking-tight bg-white text-black shadow-lg top-0 -right-1
                            w-full max-w-sm h-screen p-5 z-50 dark:bg-stone-800 dark:text-white font-jetbrainsMono"
          >
            <div className="h-full flex flex-col justify-center gap-32">
              <div className="flex flex-row justify-between items-center">
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeInOut",
                    type: "spring",
                    bounce: 0.3,
                  }}
                  className="text-4xl font-bold"
                >
                  Menu
                </motion.h2>
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring" }}
                  onClick={() => setSideBar(!sideBar)}
                  className="p-2 border-2 border-black dark:border-stone-600 rounded-full"
                >
                  <XIcon />
                </motion.span>
              </div>
              <div className="flex flex-col gap-5 text-xl text-stone-800 dark:text-stone-200">
                {NavbarTabs.map((tab, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: 30 + index * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    onClick={(e: EventAnchorType) =>
                      handleAnchorClick(e, tab.link)
                    }
                    href={tab.link}
                    key={index}
                    className="flex flex-row justify-between items-center"
                  >
                    {t(tab.value)}
                    <motion.span>
                      <ChevronRight />
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-[49]"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
