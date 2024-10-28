"use client";

import React from "react";
import {motion} from "framer-motion";
import EffectButton from "@/components/atoms/EffectButton";

const dropdownVariants = {
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            type: "string",
            stiffness: 300,
        },
    },
    closed: {
        opacity: 0,
        height: "auto",
        transition: {
            duration: 0.3,
            type: "string",
            stiffness: 300,
        }
    }
}

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    options: SelectOption[];
    onSelect: (value: string) => void;
    defaultSelect: SelectOption;
    placeholder?: string;
}

const Select = ({options, defaultSelect, onSelect, placeholder = "Select an option"}: SelectProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value: string) => {
        onSelect(value);
        setIsOpen(false);
    }

    return (
        <div>
            <EffectButton onClickMethod={toggleDropdown} effectDirection="top">
                {defaultSelect.label || placeholder}
            </EffectButton>
            {isOpen && (
                <motion.div
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                >
                    {
                        options.map((option, index) => (
                            <div
                                className="cursor-pointer"
                                key={index}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))
                    }
                </motion.div>
            )}
        </div>
    )
}

export default Select;