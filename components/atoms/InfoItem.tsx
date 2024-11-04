import React, {FC, useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {ArrowTopRightIcon, Cross1Icon} from "@radix-ui/react-icons";
import Modal from "@/components/molecules/Modal";
import {twMerge} from "tailwind-merge";

interface InfoItemProps {
    title: string;
    place: string;
    date: string;
    index: number;
    imgSrc?: string;
    infoType: string;
}

/**
 * InfoItem displays the information that is passed to it
 * @param title
 * @param place
 * @param date
 * @param index
 * @param imgSrc
 * @param infoType
 * @constructor
 */
const InfoItem: FC<InfoItemProps> = (
    {
        title,
        place,
        date,
        index,
        imgSrc = "/150x150.png",
        infoType,
    }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemVariants = {
        hidden: {opacity: 0, x: (-30 - index * 100)},
        visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: "easeOut"}},
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const classes = twMerge(
        infoType === "experience" && "hover:cursor-pointer",
        "relative item flex flex-row gap-5"
    );

    return (
        <>
            <motion.div
                className={classes}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={infoType === "experience" ? toggleModal : null}
            >
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <Image src={imgSrc} alt={`${place} image`} width={80} height={80}
                           className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col flex-1 font-geistMono text-stone-700 dark:text-stone-200">
                    <p className="font-geistVF text-xs bg-stone-200 rounded px-3 w-fit dark:bg-stone-800">{date}</p>
                    <h3 className="font-bold">{title}</h3>
                    <p className="font-semibold text-sm text-stone-700 dark:text-stone-400">{place}</p>
                </div>

                {
                    infoType === "experience" && (
                        <div className="absolute right-0 bottom-0 p-5">
                            <ArrowTopRightIcon/>
                        </div>
                    )
                }
            </motion.div>

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <div className="w-full h-full flex flex-col">
                    <div className="p-2 self-end hover:cursor-pointer" onClick={toggleModal}><Cross1Icon
                        className="size-5 self-end text-stone-800 dark:text-stone-200"/>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default InfoItem;