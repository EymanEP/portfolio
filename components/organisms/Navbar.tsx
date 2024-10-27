"use client";

import EffectButton from "@/components/atoms/EffectButton";
import React from "react";
import {motion} from "framer-motion";


interface Position {
    left: number;
    width: number;
    height: number;
    opacity: number;
}

const Navbar: React.FC = () => {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg py-2 px-5 font-jetbrainsMono
             flex justify-between items-center overflow-x-hidden"
        >
            <EffectButton>EP</EffectButton>
            <div className="border-stone-700 border-2 p-1 rounded-full">
                <SlideTabs/>
            </div>
            <div>

            </div>
        </nav>)
}

/**
 * Contains all the Tabs with the links
 * @constructor
 */
const SlideTabs: React.FC = () => {
    interface Tab {
        label: string;
        link: string;
    }

    const [position, setPosition] = React.useState<Position>(
        {
            left: 0, width: 0, opacity: 0, height: 0
        }
    );

    const tabsArr: Tab[] = [
        {label: "Home", link: "#"},
        {label: "Experience", link: "#"},
        {label: "Studies", link: "#"},
        {label: "Stack", link: "#"},
        {label: "Projects", link: "#"},
        {label: "Contact", link: "#"},
    ]

    return (
        <div
            onMouseLeave={() => setPosition((prev) => ({...prev, opacity: 0}))}
            className="relative flex flex-row self-center p-0.5 rounded-full bg-black dark:bg-stone-800 w-fit">
            {tabsArr.map((tab) => (
                <Tab setPosition={setPosition} key={tab.label} label={tab.label} link={tab.link}/>
            ))}
            <Cursor position={position}/>
        </div>)
}

interface TabProps {
    setPosition: React.Dispatch<React.SetStateAction<Position>>
    label: string;
    link: string;
}

/**
 * Link anchor or Tab
 * @param label
 * @param link
 * @param setPosition
 * @constructor
 */
const Tab: React.FC<TabProps> = ({label, link, setPosition}) => {
    const ref = React.useRef<HTMLAnchorElement>(null);
    return <a href={link}
              ref={ref}
              onMouseEnter={() => {
                  if (!ref.current) return;

                  const {width, height} = ref.current.getBoundingClientRect();
                  setPosition({width, opacity: 1, left: ref.current.offsetLeft, height})
              }}
              className="relative z-10 block px-3 py-1 text-xs uppercase text-white mix-blend-difference
           md:px-5 md:py-3 md:xs"
    >
        {label}
    </a>
}


interface CursorProps {
    position: Position;
}

const Cursor: React.FC<CursorProps> = ({position}) => {
    return <motion.div
        animate={position}
        transition={{type: "spring", stiffness: 200, damping: 15, mass: 0.5}}
        className="absolute z-0 rounded-full bg-stone-800 mix-blend-difference"
    />;
}

export default Navbar;