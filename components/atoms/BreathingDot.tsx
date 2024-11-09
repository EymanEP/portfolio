"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const BreathingDot: FC<{ className: string }> = (props) => {
  const dotClasses = twMerge(props.className, "border w-3 h-3 rounded-full");
  const bgDotClasses = twMerge(props.className, "border w-3 h-3 rounded-full absolute bg-opacity-50");
  return (
      <div className="relative flex items-center justify-center">
          <motion.div
              className={dotClasses}
              animate={{scale: [1, 1.2, 1]}}
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
              }}
          />
          <motion.div
              className={bgDotClasses}
              animate={{scale: [1, 1.6, 1]}}
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
              }}
          />
      </div>
  );
};

export default BreathingDot;
