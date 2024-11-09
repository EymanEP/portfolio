"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [showProgress, setShowProgress] = React.useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowProgress(latest > 0.1);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const topButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {showProgress && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50 dark:bg-gray-900">
          <motion.div
            className="h-full bg-green-500"
            style={{ width: fillWidth }}
            transition={{ ease: "linear" }}
          />
        </div>
      )}

      <motion.div
        variants={topButtonVariants}
        initial="hidden"
        animate={showProgress ? "visible" : "hidden"}
        transition={{ type: "srping", ease: "easeInOut", duration: 0.3 }}
        whileTap={{ scale: 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-black text-white cursor-pointer dark:bg-stone-800 border-2 border-stone-600"
      >
        <ChevronUp className="size-10" />
      </motion.div>
    </>
  );
};

export default ScrollProgress;
