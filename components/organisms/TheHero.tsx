"use client";

import React from "react";
import Avatar from "@/components/atoms/Avatar";
import {GitHubLogoIcon, LinkedInLogoIcon, SewingPinIcon} from "@radix-ui/react-icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import DownloadButton from "@/components/atoms/DownloadButton";
import {MailIcon} from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {FaAngular, FaJava, FaReact, FaVuejs} from "react-icons/fa";
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";
import {FadeDown} from "@/components/ui/FadeDown";

/**
 * TODO: Make the more about me button go to about section
 * @constructor
 */

const TheHero: React.FC = () => {
    const t = useTranslations("thehero");

    const socials = [
        {
            label: "LinkedIn",
            icon: <LinkedInLogoIcon className="w-7 h-7"/>,
            link: "https://www.linkedin.com/in/eyman-pashaliev-255662243/",
            className: "",
        },
        {
            label: "Github",
            icon: <GitHubLogoIcon className="w-7 h-7"/>,
            link: "https://github.com/EymanEP",
            className: ""
        },
        {
            label: "Gmail",
            icon: <MailIcon className="w-5 h-5"/>,
            link: `mailto:epashaliev${"02"}${"@"}gmail.com`,
            className: "bg-black text-white rounded-lg w-7 h-7 flex justify-center items-center dark:bg-white dark:text-black",
        }
    ]

    const onClick = (link?: string) => {
        if (link) window.open(link, "_blank");
    }

    return (
        <div
            className="flex flex-col justify-between divide-y-4 lg:flex-row lg:divide-y-0 lg:divide-x-4">
            <div className="flex flex-col gap-5 py-4 lg:py-0 flex-1 lg:pr-8">
                <div className="flex flex-row justify-between lg:justify-around lg:gap-5">
                    <Avatar src="/avatar.jpg" alt="Eyman Pashaliev photo"/>
                    <div className="space-y-2 text-stone-700 font-playfairDisplay dark:text-stone-200">
                        <FadeDown text="Eyman Pashaliev" />
                        <WordPullUp className="font-semibold tracking-tight text-xl text-left"
                                    words={t('developer')}/>
                        <p className="font-geistMono flex flex-row items-center dark:text-stone-200">
                            <SewingPinIcon/>{t('location')}
                        </p>
                        <WorkStatus status="open"/>
                    </div>
                </div>
                <div
                    className="flex flex-row justify-between font-geistMono lg:justify-center lg:self-end lg:pr-10 lg:gap-5">
                    <div className="flex flex-row gap-2 items-center">
                        {socials.map((social, index) => (
                            <SocialIcon key={index} handleClick={onClick} label={social.label} link={social.link}
                                        className={social.className}>
                                {social.icon}
                            </SocialIcon>
                        ))}
                    </div>
                    <DownloadButton/>
                </div>
            </div>

            <div className="space-y-5 justify-between flex-col py-4 lg:py-0 lg:flex flex-1 lg:pl-8">
                <div className="space-y-4 text-stone-700 font-playfairDisplay dark:text-stone-200">
                    <FadeDown text={t("aboutme")} />
                    <p className="tracking-wider font-medium">
                        {t("aboutmedesc")}
                    </p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-end">
                    <div className="text-xs">
                        <TechIcons/>
                    </div>
                    <Button className="w-fit px-2 md:px-4">{t("aboutbtn")}</Button>
                </div>
            </div>
        </div>
    )
}

interface SocialProps {
    children: React.ReactNode;
    link?: string;
    handleClick: (link?: string) => void;
    label: string;
    className?: string;
}

const SocialIcon: React.FC<SocialProps> = ({children, link, handleClick, label, className}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger onClick={() => handleClick(link ?? undefined)} className={className}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

const TechIcons: React.FC = () => {
    const tech = [
        {name: "Angular", icon: <FaAngular/>},
        {name: "React", icon: <FaReact/>},
        {name: "Vue", icon: <FaVuejs/>},
        {name: "Java", icon: <FaJava/>}
    ]

    return (
        <div className="flex flex-row space-x-3">
            {tech.map((t, index) => (
                <div className="flex flex-col items-center" key={index}>
                    <p className="text-xs font-geistMono">{t.name}</p>
                    <span className="text-3xl">{t.icon}</span>
                </div>
            ))}
        </div>
    )
}

const WorkStatus: React.FC<{ status: "open" | "closed" }> = ({status}) => {
    const t = useTranslations("thehero");
    const message = status === "open" ? t("opentowork") : t("working");
    const statusClasses = {
        "open": "bg-green-200 text-green-800",
        "closed": "bg-amber-200 text-amber-800"
    }
    const classes = twMerge(statusClasses[status],
        "font-geistVF tracking-tighter px-4 rounded-xl w-fit flex flex-row items-center gap-2"
    )
    const dotClasses = twMerge(status === 'open'
        ? 'bg-green-300 border-green-800'
        : 'bg-amber-300 border-amber-800',
        " border w-3 h-3 rounded-full"
    )
    return (
        <div className={classes}>
            <motion.div
                className={dotClasses}
                animate={{scale: [1, 1.2, 1]}}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <p className="">{message}</p>
        </div>
    )
}

export default TheHero;