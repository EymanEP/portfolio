"use client";
import React, {createRef, FC, forwardRef, RefObject, useEffect, useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FadeDown} from "@/components/ui/FadeDown";
import {twMerge} from "tailwind-merge";
import Cursor from "@/components/atoms/Cursor";
import Position from "@/interfaces/Position";
import {ContentType} from "@/interfaces/ContentType";
import ExperienceStudiesInfo from "@/data/ExperienceStudiesInfo";
import InfoItem from "@/components/atoms/InfoItem";
import {useLocale} from "next-intl";
import Lang from "@/interfaces/Lang";

/**
 * Content state sets the content to display
 * Position and tabRefs set the state for the Cursor to follow the active tabs
 * @constructor
 */
const TheExperience: FC = () => {
    const [content, setContent] = React.useState<ContentType>("experience");
    const [position, setPosition] = React.useState<Position>({left: 0, opacity: 0, height: 0, width: 0})
    const [tabRefs, setTabRefs] = useState<RefObject<HTMLButtonElement>[]>([]);

    const locale = useLocale() as keyof Lang;

    const containerVariants = {
        hidden: {opacity: 0, maxHeight: 0},
        visible: {
            opacity: 1,
            maxHeight: "100vh",
        },
    }

    const tabs = useMemo(() => [
        {value: "experience" as ContentType, label: "Experience"},
        {value: "studies" as ContentType, label: "Studies"}
    ], [])

    // This sets the tabrefs to the tabs used in the component
    useEffect(() => {
        setTabRefs(tabs.map(() => createRef<HTMLButtonElement>()))
    }, [tabs]);

    /**
     * UpdatePosition is used to change the position of the cursor to that of the active tab
     */
    const updatePosition = () => {
        if (tabRefs.length === 0) return;
        const activeTabRef = tabRefs[content === "experience" ? 0 : 1]

        if (!activeTabRef || !activeTabRef.current) return;

        const {width, height} = activeTabRef.current.getBoundingClientRect();
        setPosition({left: activeTabRef.current.offsetLeft, width, height, opacity: 1})
    }

    /**
     * This useEffect is in charge of changing the position of the Cursor everytime the content changes
     */
    useEffect(() => {
        updatePosition();

        const handleResize = () => updatePosition();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [content, tabRefs]);

    return (
        <div className="flex flex-col gap-8 text-stone-700 dark:text-stone-200">
            <span className="font-playfairDisplay"><FadeDown text="Experience & Studies"/></span>
            <motion.div
                className="flex flex-col gap-5 border-2 border-stone-600 rounded-xl p-3 shadow-lg overflow-hidden dark:border-stone-700"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: "all"}}
                variants={containerVariants}
                transition={{duration: 0.8, ease: "easeInOut", delay: .3}}
            >
                <div className="relative font-geistMono flex flex-row items-center justify-around">
                    {
                        tabs.map((item, index) => (
                            <Tab key={index}
                                 ref={tabRefs[index]}
                                 setContentFn={setContent}
                                 value={item.value}
                                 label={item.label}
                                 isActive={content === item.value}
                            />
                        ))
                    }
                    <Cursor
                        position={position}
                        className="bg-stone-600 dark:bg-stone-700 rounded-lg "
                    />
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
                            ExperienceStudiesInfo
                                .filter(item => item.type === content)
                                .map((item, index) => (
                                    <InfoItem key={item.id + index}
                                              title={item.title[locale]}
                                              place={item.place}
                                              date={item.date[locale]}
                                              index={index}
                                              description={item.description}
                                              imgSrc={item.imgSrc}
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

/**
 * Component used to display the Tabs for navigation
 */
const Tab = forwardRef<HTMLButtonElement, {
    setContentFn: (val: ContentType) => void,
    value: ContentType,
    label: string,
    isActive?: boolean,
}>(function Tab({setContentFn, value, label, isActive}, ref) {
    return (
        <button
            ref={ref}
            onClick={() => setContentFn(value)}
            className={
                twMerge("px-4 py-1 w-full h-full z-10 text-stone-700 dark:text-stone-100",
                    isActive && "font-bold text-stone-200")
            }
        >
            {label}
        </button>
    )
})

