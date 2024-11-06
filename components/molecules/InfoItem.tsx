"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import Modal from "@/components/molecules/Modal";
import { twMerge } from "tailwind-merge";
import Lang from "@/interfaces/Lang";
import { useLocale } from "next-intl";

interface InfoItemProps {
  title: string;
  place: string;
  date: string;
  index: number;
  imgSrc?: string;
  description?: Lang;
}

/**
 * InfoItem displays the information that is passed to it
 * @param title
 * @param place
 * @param date
 * @param index
 * @param imgSrc
 * @param description
 * @constructor
 */
const InfoItem: FC<InfoItemProps> = ({
  title,
  place,
  date,
  index,
  imgSrc = "/150x150.png",
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, x: -30 - index * 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const classes = twMerge(
    description !== undefined && "hover:cursor-pointer",
    "relative item flex flex-row gap-5",
  );

  const locale = useLocale() as keyof Lang;

  const content = description ? description[locale].split("\n") : null;

  return (
    <>
      <motion.div
        className={classes}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        onClick={description ? toggleModal : null}
      >
        <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg bg-white">
          <Image
            src={imgSrc}
            alt={`${place} image`}
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col flex-1 font-geistMono tracking-tighter text-stone-700 dark:text-stone-200">
          <p className="font-geistVF text-xs bg-stone-200 rounded px-3 w-fit dark:bg-stone-800">
            {date}
          </p>
          <h3 className="font-bold">{title}</h3>
          <p className="font-semibold text-sm text-stone-700 dark:text-stone-400">
            {place}
          </p>
        </div>

        {description && (
          <div className="absolute right-0 top-0">
            <ArrowTopRightIcon />
          </div>
        )}
      </motion.div>

      {description && (
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <div className="w-full h-full gap-8 flex flex-col text-stone-700 dark:text-stone-200">
            <div className="flex flex-row justify-between">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="text-3xl font-playfairDisplay font-semibold tracking-tighter"
              >
                {title}
              </motion.h1>
              <div className="p-2 hover:cursor-pointer" onClick={toggleModal}>
                <Cross1Icon className="size-5 self-end text-stone-800 dark:text-stone-200" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="flex flex-row gap-4"
              >
                <div className="w-20 h-20 min-w-20 min-h-20 rounded-lg shadow-lg overflow-hidden dark:bg-white">
                  <Image
                    src={imgSrc}
                    alt={place}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-around">
                  <p className="px-2 w-fit font-geistVF tracking-tighter text-sm bg-stone-200 rounded-full text-stone-700 dark:bg-stone-700 dark:text-stone-200">
                    {date}
                  </p>
                  <h3 className="font-geistVF font-bold text-2xl tracking-tighter">
                    {place}
                  </h3>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="flex flex-col gap-2 list-disc pl-6"
              >
                {content!.map((line, index) => (
                  <li
                    key={index}
                    className="font-geistMono tracking-tighter flex-1"
                  >
                    {line}
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default InfoItem;
