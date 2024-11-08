"use client";
import {motion} from "framer-motion";
import {twMerge} from "tailwind-merge";

export function FadeDown({text, className}: { text: string, className?: string }) {
    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, y: -10},
        show: {opacity: 1, y: 0, transition: {type: "spring"}},
    };
    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{once: true}}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <motion.h1
                className={twMerge(className, "tracking-tighter font-bold text-3xl")}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
                {text}
            </motion.h1>

        </motion.div>
    );
}