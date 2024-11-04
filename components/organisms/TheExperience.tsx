"use client";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FadeDown} from "@/components/ui/FadeDown";
import {twMerge} from "tailwind-merge";
import Image from "next/image";

type ContentType = "experience" | "studies";

interface Info {
    id: number;
    type: ContentType;
    title: string;
    place: string;
    date: string;
}

const data: Info[] = [
    {id: 1, type: "experience", title: "Frontend Developer", place: "Company A", date: "Jan 2021 - Jun 2021"},
    {id: 2, type: "experience", title: "Backend Developer", place: "Company B", date: "Jul 2021 - Dec 2021"},
    {id: 3, type: "experience", title: "Full Stack Developer", place: "Company C", date: "Jan 2022 - Present"},
    {id: 10, type: "studies", title: "Bachelor's in Computer Science", place: "University X", date: "2016 - 2020"},
    {id: 11, type: "studies", title: "Master's in Software Engineering", place: "University Y", date: "2021 - Present"},
];

const TheExperience: React.FC = () => {
    const [content, setContent] = React.useState<ContentType>("experience");

    const containerVariants = {
        hidden: {opacity: 0, maxHeight: 0},
        visible: {
            opacity: 1,
            maxHeight: "100vh",
        },

    }

    const tabs = [
        {value: "experience" as ContentType, label: "Experience"},
        {value: "studies" as ContentType, label: "Studies"}
    ]

    return (
        <div className="flex flex-col gap-8 text-stone-700 dark:text-stone-200">
            <span className="font-playfairDisplay"><FadeDown text="Experience & Studies"/></span>
            <motion.div
                className="flex flex-col gap-5 border-2 border-black rounded-xl p-3 shadow-lg overflow-hidden dark:border-stone-300"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: "all"}}
                variants={containerVariants}
                transition={{duration: 0.8, ease: "easeInOut", delay: .5}}
            >
                <div className="relative font-geistMono flex flex-row items-center justify-around">
                    {
                        tabs.map((item, index) => (
                            <Tab key={index}
                                 setContentFn={setContent}
                                 value={item.value}
                                 label={item.label}
                                 isActive={content === item.value}/>
                        ))
                    }
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        className="flex flex-col gap-5"
                        key={content}
                        initial={{opacity: 0, maxHeight: 0}}
                        animate={{opacity: 1, maxHeight: "500px"}}
                        exit={{opacity: 0, maxHeight: 0}}
                        transition={{duration: 0.6, ease: "easeInOut", staggerChildren: 0.5, startDelay: 0.15}}
                    >
                        {
                            data
                                .filter(item => item.type === content)
                                .map((item, index) => (
                                    <InfoItem key={item.id + index}
                                              title={item.title}
                                              place={item.place}
                                              date={item.date}
                                              index={index}
                                    />
                                ))
                        }
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default TheExperience;

const Tab: React.FC<{
    setContentFn: (val: ContentType) => void;
    value: ContentType;
    label: string;
    className?: string;
    isActive: boolean;
}> = ({setContentFn, value, label, className, isActive}) => {
    return (
        <button
            onClick={() => setContentFn(value)}
            className={twMerge(className, "px-4 py-1", isActive && "font-bold")}
        >
            {label}
        </button>
    )
}

interface InfoItemProps {
    title: string;
    place: string;
    date: string;
    index: number;
    imgSrc?: string;
}

const InfoItem: React.FC<InfoItemProps> = (
    {
        title,
        place,
        date,
        index,
        imgSrc = "/150x150.png",
    }) => {

    const itemVariants = {
        hidden: {opacity: 0, x: (-30 - index * 100)},
        visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: "easeOut"}},
    };

    return (
        <motion.div
            className="item flex flex-row gap-5"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-20 h-20">
                <Image src={imgSrc} alt={`${place} image`} width={80} height={80}
                       className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col flex-1 font-geistMono text-stone-700 dark:text-stone-200">
                <p className="font-geistVF text-xs bg-stone-200 rounded px-3 w-fit dark:bg-stone-800">{date}</p>
                <h3 className="font-bold">{title}</h3>
                <p className="font-semibold text-sm text-stone-700 dark:text-stone-400">{place}</p>
            </div>
        </motion.div>
    )
}