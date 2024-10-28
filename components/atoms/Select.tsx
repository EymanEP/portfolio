"use client";

import React, {MutableRefObject, useEffect, useRef} from "react";
import {motion, useAnimate} from "framer-motion";
import {TriangleDownIcon} from "@radix-ui/react-icons";
import {animate} from "framer-motion/dom";

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    options: SelectOption[];
    onSelect: (value: SelectOption) => void;
    defaultSelect: SelectOption;
    placeholder?: string;
}

const Select = ({options, defaultSelect, onSelect, placeholder = "Select an option"}: SelectProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scope] = useAnimate();
    const [dropdownPosition, setDropdownPosition] = React.useState<{ top: number, left: number }>();
    const buttonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value: SelectOption) => {
        onSelect(value);
        setIsOpen(false);
    }

    useEffect(() => {
        animate(
            "div.dropdown",
            {
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.4,
            }
        )

        if (!buttonRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.top + buttonRect.height * 1.4,
            left: buttonRect.left - (buttonRect.width / 2),
        })
    }, [isOpen])

    return (
        <div>
            <button
                ref={buttonRef}
                className="px-4 py-2 w-24 rounded-full bg-black border-2 text-white flex flex-row justify-between items-center
                dark:bg-stone-800 dark:border-stone-600 hover:bg-stone-900"
                onClick={toggleDropdown}
            >
                {defaultSelect.label || placeholder}
                <motion.span
                    initial={false}
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{type: "spring", stiffness: 300, damping: 20}}
                >
                    <TriangleDownIcon className="w-5 h-5"/>
                </motion.span>
            </button>
            <motion.div
                className="w-40 border-2 overflow-hidden dropdown fixed z-10 bg-black text-white rounded-lg
                dark:bg-stone-800 dark:border-stone-600"
                ref={scope}
                style={{top: dropdownPosition?.top, left: dropdownPosition?.left}}
            >
                {
                    options.map((option, index) => (
                        <div
                            className="cursor-pointer px-4 py-2  text-center hover:bg-stone-900"
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Select;