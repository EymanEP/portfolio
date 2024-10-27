import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {MoonIcon, SunIcon} from "lucide-react";

const ThemeButton: React.FC = () => {
    const [dark, setDark] = React.useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const isDark = document.body.classList.contains("dark");
        setDark(isDark);
    }, [])

    const toggleTheme = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setDark((prev) => !prev)
        document.body.classList.toggle("dark");

        setTimeout(() => setIsTransitioning(false), 300)

    }
    return (
        <button
            onClick={toggleTheme}
            disabled={isTransitioning}
            className="relative w-10 h-10 flex justify-center items-center p-2 rounded-full"
        >
            <AnimatePresence mode="wait" initial={false}>
                {
                    dark ? (
                        <motion.div
                            key="moon"
                            initial={{opacity: 0, scale: 0.5, rotate: -45}}
                            animate={{opacity: 1, scale: 1, rotate: 0}}
                            exit={{opacity: 0, scale: 0.5, rotate: 45}}
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className="text-indigo-500"
                        >
                            <MoonIcon/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{opacity: 0, scale: 0.5, rotate: -45}}
                            animate={{opacity: 1, scale: 1, rotate: 0}}
                            exit={{opacity: 0, scale: 0.5, rotate: 45}}
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className="text-yellow-500"
                        >
                            <SunIcon/>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </button>
    );
}

export default ThemeButton;