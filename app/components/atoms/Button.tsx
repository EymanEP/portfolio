"use client"

import classNames from 'classnames';
import {useRouter} from "next/navigation";
import React from "react";


type ButtonProps = {
    effectDirection?: "top" | "bottom" | "left" | "right";
    cta?: string;
    children: React.ReactNode;
}

const Button = ({effectDirection = 'bottom', cta, children}: ButtonProps) => {
    const router = useRouter();
    const buttonClasses = classNames(
        'relative bg-black border-2 px-3 py-0.5 rounded-2xl overflow-hidden transition-all duration-500 group shadow-lg' +
        'hover:cursor-pointer hover:border-black hover:text-black'
    )

    const effectClasses = classNames(
        'absolute bg-white inset-0 transform transition-transform duration-500 ease-out rounded-lg',
        {
            'scale-y-0 origin-bottom group-hover:scale-y-100': effectDirection === 'bottom',
            'scale-x-0 origin-left group-hover:scale-x-100': effectDirection === 'left',
            'scale-x-0 origin-right group-hover:scale-x-100': effectDirection === 'right',
            'scale-y-0 origin-top group-hover:scale-y-100': effectDirection === 'top'
        }
    )

    const handleClick = () => {
        if (cta) router.push(cta);
    }

    return (
        <button onClick={handleClick} className={buttonClasses}>
            <div className={'relative z-10'}>{children}</div>
            <span className={effectClasses}/>
        </button>
    )
}

export default Button;