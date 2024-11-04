import React, {FC} from "react";
import {motion} from "framer-motion";
import {twMerge} from "tailwind-merge";
import Position from "@/interfaces/Position";


interface CursorProps {
    position: Position;
    className?: string;
}

/**
 * Cursor is the background pill that moves with the active tabs
 * Reminder to use z-10 to the div that should go on top of the cursor
 * @param position
 * @param className
 * @constructor
 */
const Cursor: FC<CursorProps> = ({position, className}) => {
    return <motion.div
        animate={position}
        transition={{type: "spring", stiffness: 200, damping: 15, mass: 0.5}}
        className={twMerge(className, "absolute z-0 pointer-events-none")}
    />;
}

export default Cursor;