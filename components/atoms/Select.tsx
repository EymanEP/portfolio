"use client";

import React, {MutableRefObject, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {TriangleDownIcon} from "@radix-ui/react-icons";
import {createPortal} from "react-dom";

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
    const [dropdownPosition, setDropdownPosition] = React.useState<{ top: number, left: number }>();
    const buttonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const dropdownRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value: SelectOption) => {
        onSelect(value);
        setIsOpen(false);
    }

    useEffect(() => {
        // Get the position of the two elements to center them
        if (!buttonRef.current || !dropdownRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropwdownRect = dropdownRef.current.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.top + (buttonRect.height * 1.4),
            left: buttonRect.left + (buttonRect.width / 2) - (dropwdownRect.width / 2),
        })

        // Handles if the user clicks outside when its opened
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        // Closes if the user scrolls
        const handleScroll = () => isOpen && setIsOpen(false);

        window.addEventListener("scroll", handleScroll);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen])

    return (
        <>
            <motion.button
                ref={buttonRef}
                className="px-4 py-2 w-24 rounded-lg text-xs shadow-lg bg-black border-2 text-white flex flex-row justify-between items-center
                dark:bg-stone-800 dark:border-stone-600 hover:bg-stone-900"
                onClick={toggleDropdown}
                whileHover={{
                    scale: 1.05,
                    transition: {duration: 0.2}
                }}
                whileTap={{scale: 0.98}}
                transition={{type: "spring", stiffness: 300}}
            >
                {defaultSelect.label || placeholder}
                <motion.span
                    initial={false}
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{type: "spring", stiffness: 300, damping: 20}}
                >
                    <TriangleDownIcon className="w-5 h-5"/>
                </motion.span>
            </motion.button>
            {
                isOpen && createPortal(
                    (
                        <motion.div
                            className="w-28 text-xs fixed border-2 overflow-hidden z-50 bg-black text-white rounded-lg dark:bg-stone-800 dark:border-stone-600"
                            ref={dropdownRef}
                            style={{top: dropdownPosition?.top, left: dropdownPosition?.left}}
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{type: "spring", stiffness: 300, damping: 30}}
                        >
                            {
                                options.map((option, index) => (
                                    <motion.div
                                        className="cursor-pointer px-4 py-2 text-center hover:bg-stone-900 transition-colors duration-200"
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option.label}
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    ), document.body)
            }
        </>
    )
}

export default Select;