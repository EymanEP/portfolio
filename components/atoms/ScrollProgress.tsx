"use client";
import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const ScrollProgress: React.FC = () => {
    const {scrollYProgress} = useScroll();
    const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return (
        <>
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50 dark:bg-gray-900">
                <motion.div
                    className="h-full bg-green-500"
                    style={{width: fillWidth}}
                    transition={{ease: "linear"}}
                />
            </div>
        </>
    )
}

export default ScrollProgress;