"use client"

import classNames from 'classnames';
import {useRouter} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";


type ButtonProps = {
    effectDirection?: "top" | "bottom" | "left" | "right";
    cta?: string;
    children: React.ReactNode;
}

const EffectButton = ({effectDirection = 'bottom', cta, children}: ButtonProps) => {
    const router = useRouter();
    const [isHover, setIsHover] = React.useState(false);

    const buttonClasses = classNames(
        'relative bg-black border-2 px-3 py-0.5 rounded-2xl overflow-hidden group shadow-lg' +
        'hover:cursor-pointer hover:border-black hover:text-black'
    )

    const effectVariants = {
        hidden: {
            scaleX: effectDirection === "left" || effectDirection === "right" ? 0 : 1,
            scaleY: effectDirection === "top" || effectDirection === "bottom" ? 0 : 1,
            originX: effectDirection === "left" ? 0 : effectDirection === "right" ? 1 : 0.5,
            originY: effectDirection === "top" ? 0 : effectDirection === "bottom" ? 1 : 0.5,
        },
        visible: {
            scaleX: 1,
            scaleY: 1,
            transition: {duration: 0.3, ease: "easeOut"}
        }
    }

    const handleClick = () => {
        if (cta) {
            setTimeout(() => {
                router.push(cta);
            }, 200)
        }
    }

    return (
        <motion.button
            onClick={handleClick}
            className={buttonClasses}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            whileTap={{scale: 0.7}}
            transition={{type: "spring", stiffness: 400, damping: 17}}
        >
            <div className={'relative z-20'}>{children}</div>
            <AnimatePresence>
                {isHover && (
                    <motion.div className="absolute inset-0 bg-white z-10 rounded-lg"
                                variants={effectVariants}
                                initial="hidden"
                                animate="visible"
                    />
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default EffectButton;
