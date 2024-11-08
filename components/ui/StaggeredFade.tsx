import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function StaggeredFade({
  className,
  sentence,
}: {
  className: string;
  sentence: string;
}) {
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };
  const words = sentence.split(" ");
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      className={clsx("font-bold drop-shadow-sm", className)}
    >
      {words.map((word, i) => (
        <motion.span key={word + i} variants={wordVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
