"use client"

import classNames from 'classnames';
import {useRouter} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {twMerge} from "tailwind-merge";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth < 768);

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })
    return isMobile;
}

type ButtonProps = {
    effectDirection?: "top" | "bottom" | "left" | "right";
    cta?: string;
    size?: "small" | "medium" | "large" | "xl";
    color?: "contrast" | "blue" | "red" | "stone";
    children: React.ReactNode;
    className?: string;
    bgDivClassName?: string;
    disabled?: boolean;
    onClickMethod?: () => void;
}

const EffectButton: React.FC<ButtonProps> = (
    {
        effectDirection = 'bottom',
        cta,
        children,
        size = "medium",
        color = "contrast",
        className,
        bgDivClassName,
        disabled = false,
        onClickMethod
    }
) => {
    const router = useRouter();
    const [isHover, setIsHover] = React.useState(false);
    const [playEffect, setPlayEffect] = React.useState(false);
    const isMobile = useIsMobile();

    const sizeStyles = {
        small: "px-2 py-1 text-sm", medium: "px-4 py-2 text-base", large: "px-6 py-3 text-lg", xl: "px-8 py-4 text-xl",
    }

    const colorStyles = {
        contrast: "bg-black text-white border-black dark:border-white hover:text-black",
        blue: "bg-blue-700 text-white border-blue-500 hover:text-blue-700",
        red: "bg-red-700 text-white border-red-500 hover:text-red-700",
        stone: "bg-stone-700 text-stone-200 border-stone-400 hover:text-stone-700"
    }

    const buttonClasses = twMerge(
        classNames(
            "relative rounded-2xl overflow-hidden group shadow-lg border-2 transition-colors mix-blend-difference " +
            "hover:cursor-pointer",
            sizeStyles[size],
            colorStyles[color]
        ), className
    )

    const bgDivColors = {
        contrast: "bg-white",
        blue: "bg-blue-100",
        red: "bg-red-100",
        stone: "bg-stone-200"
    }

    const bgDivClasses = twMerge(
        classNames(
            "absolute inset-0 z-10 rounded-lg",
            bgDivColors[color]
        ), bgDivClassName
    )

    const effectVariants = {
        hidden: {
            scaleX: effectDirection === "left" || effectDirection === "right" ? 0 : 1,
            scaleY: effectDirection === "top" || effectDirection === "bottom" ? 0 : 1,
            originX: effectDirection === "left" ? 0 : effectDirection === "right" ? 1 : 0.5,
            originY: effectDirection === "top" ? 0 : effectDirection === "bottom" ? 1 : 0.5,
        }, visible: {
            scaleX: 1, scaleY: 1, transition: {duration: 0.3, ease: "easeOut"}
        }
    }

    const handleClick = () => {
        setPlayEffect(true);

        if (cta) {
            setTimeout(() => {
                router.push(cta);
            }, 200)
        }

        if (onClickMethod) onClickMethod();

        setTimeout(() => setPlayEffect(false), 300);
    }

    return (<motion.button
        disabled={disabled}
        className={buttonClasses}
        onClick={handleClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileTap={{scale: 0.8}}
        transition={{type: "spring", stiffness: 400, damping: 17}}
    >
        <div className="relative z-20">{children}</div>
        <AnimatePresence>
            {isHover || (isMobile && playEffect) ? (
                <motion.div className={bgDivClasses}
                            variants={effectVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                />
            ) : null}
        </AnimatePresence>
    </motion.button>)
}

export default EffectButton;
