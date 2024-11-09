import { motion } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

interface HamburgerButtonProps {
  sideBar: boolean;
  setSideBar: (sideBar: boolean) => void;
}

const SideBarButton: React.FC<HamburgerButtonProps> = ({
  sideBar,
  setSideBar,
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setSideBar(!sideBar)}
      className="p-3 bg-black text-white rounded-md shadow-lg z-[999] border-2 dark:bg-stone-800 dark:border-stone-600 dark:text-white"
    >
      <HamburgerMenuIcon />
    </motion.div>
  );
};

export default SideBarButton;
