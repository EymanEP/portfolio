"use client";

import React from "react";
import Avatar from "@/components/atoms/Avatar";
import {GitHubLogoIcon, LinkedInLogoIcon, SewingPinIcon} from "@radix-ui/react-icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import DownloadButton from "@/components/atoms/DownloadButton";
import {MailIcon} from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import {useTranslations} from "next-intl";

/**
 * TODO: Make the mail icon go to the contact section
 * @constructor
 */

const TheHero: React.FC = () => {
    const t = useTranslations("thehero");
    const onClick = (link?: string) => {
        if (link) window.open(link, "_blank");
    }

    return (
        <div className="flex flex-row gap-5">
            <Avatar src="/avatar.jpg" alt="Eyman Pashaliev photo"/>
            <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col text-stone-700 font-playfairDisplay dark:text-stone-100">
                    <h1 className="tracking-tighter font-bold text-3xl">Eyman Pashaliev</h1>
                    <WordPullUp className="font-semibold tracking-tight text-xl text-left" words={t('developer')}/>
                </div>
                <div className="flex flex-col gap-2 font-geistMono">
                    <p className="flex flex-row items-center"><SewingPinIcon/>{t('location')}</p>
                    <div className="flex flex-row gap-2 items-center">
                        <SocialIcon label="LinkedIn" handleClick={onClick}
                                    link="https://www.linkedin.com/in/eyman-pashaliev-255662243/">
                            <LinkedInLogoIcon className="w-7 h-7"/>
                        </SocialIcon>
                        <SocialIcon label="Github" handleClick={onClick} link="https://github.com/EymanEP">
                            <GitHubLogoIcon className="w-7 h-7"/>
                        </SocialIcon>
                        <SocialIcon handleClick={onClick} label="Gmail"
                                    className="bg-black text-white rounded-lg w-7 h-7 flex justify-center items-center">
                            <MailIcon className="w-5 h-5 "/>
                        </SocialIcon>
                        <DownloadButton/>
                    </div>
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

export default TheHero;