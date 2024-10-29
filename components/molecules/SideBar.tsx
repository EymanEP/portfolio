"use client";

import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronRight, XIcon} from "lucide-react";

interface Tab {
    label: string;
    link: string;
}

const tabsArr: Tab[] = [
    {label: "Home", link: "#"},
    {label: "Experience", link: "#"},
    {label: "Studies", link: "#"},
    {label: "Stack", link: "#"},
    {label: "Projects", link: "#"},
    {label: "Contact", link: "#"},
];

interface SideBarProps {
    sideBar: boolean
    setSideBar: (value: boolean) => void,
}

const SideBar: React.FC<SideBarProps> = ({sideBar = false, setSideBar}) => {
    return (
        <AnimatePresence>
            {
                sideBar && (
                    <>
                        <motion.div
                            initial={{x: '100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{type: "spring", bounce: 0, duration: 0.4}}
                            className="fixed rounded-xl tracking-tight bg-white text-black shadow-lg top-0 -right-1
                            w-full max-w-sm h-screen p-5 z-50 dark:bg-stone-800 dark:text-white font-jetbrainsMono"
                        >
                            <div className="h-full flex flex-col justify-center gap-32">
                                <div className="flex flex-row justify-between items-center">
                                    <h2 className="text-4xl font-bold">Menu</h2>
                                    <span
                                        onClick={() => setSideBar(!sideBar)}
                                        className="p-2 border-2 border-black dark:border-stone-600 rounded-full"
                                    >
                                        <XIcon/>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-5 text-xl text-stone-800 dark:text-stone-200">
                                    {tabsArr.map((tab, index) => (
                                        <a onClick={() => setSideBar(false)}
                                           href={tab.link}
                                           key={index}
                                           className="flex flex-row justify-between items-center">
                                            {tab.label}
                                            <motion.span><ChevronRight/></motion.span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{type: "spring", bounce: 0, duration: 0.2}}
                            onClick={() => setSideBar(false)}
                            className="fixed inset-0 bg-black bg-opacity-50"
                        />
                    </>
                )
            }
        </AnimatePresence>
    )
}

export default SideBar;