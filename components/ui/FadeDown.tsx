import clsx from "clsx";
import {motion} from "framer-motion";

export function FadeDown({text}: { text: string }) {
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
                className={clsx("tracking-tighter font-bold text-3xl")}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
                {text}
            </motion.h1>

        </motion.div>
    );
}