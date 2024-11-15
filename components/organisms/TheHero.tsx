"use client";

import React from "react";
import Avatar from "@/components/atoms/Avatar";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DownloadButton from "@/components/atoms/DownloadButton";
import { MailIcon } from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FaAngular, FaJava, FaReact, FaVuejs } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { FadeDown } from "@/components/ui/FadeDown";
import BreathingDot from "@/components/atoms/BreathingDot";
import { scrollToHTMLElement } from "@/utils/scrollUtils";

const TheHero: React.FC = () => {
  const t = useTranslations("thehero");
  const socials = [
    {
      label: "LinkedIn",
      icon: <LinkedInLogoIcon className="w-7 h-7" />,
      link: "https://www.linkedin.com/in/eyman-pashaliev-255662243/",
      className: "",
    },
    {
      label: "Github",
      icon: <GitHubLogoIcon className="w-7 h-7" />,
      link: "https://github.com/EymanEP",
      className: "",
    },
    {
      label: "Gmail",
      icon: <MailIcon className="w-5 h-5" />,
      link: `mailto:epashaliev${"02"}${"@"}gmail.com`,
      className:
        "bg-stone-700 text-white rounded-lg w-7 h-7 flex justify-center items-center dark:bg-stone-300 dark:text-black",
    },
  ];

  const onClick = (link?: string) => {
    if (link) window.open(link, "_blank");
  };

  const scrollToAboutMe = () => {
    scrollToHTMLElement("#aboutme");
  };

  const MAIN_VARIANTS = {
    hiddenleft: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, y: 0 },
    hiddenright: { opacity: 0, x: 200 },
  };

  return (
    <div className="flex flex-col justify-between divide-y-4 lg:flex-row lg:divide-y-0 lg:divide-x-4 text-stone-700 dark:text-stone-200">
      <motion.div
        variants={MAIN_VARIANTS}
        initial={"hiddenleft"}
        animate={"visible"}
        className="flex flex-col gap-5 py-4 lg:py-0 flex-1 lg:pr-8"
      >
        <div className="flex flex-row justify-between lg:justify-around lg:gap-5">
          <Avatar src="/avatar.jpg" alt="Eyman Pashaliev photo" />
          <div className="space-y-2 text-stone-700 font-playfairDisplay dark:text-stone-200">
            <FadeDown text="Eyman Pashaliev" />
            <WordPullUp
              className="font-semibold tracking-tight text-xl text-left"
              words={t("developer")}
            />
            <p className="font-geistMono flex flex-row items-center dark:text-stone-200">
              <SewingPinIcon />
              {t("location")}
            </p>
            <WorkStatus status="open" />
          </div>
        </div>
        <div className="flex flex-row justify-between font-geistMono lg:justify-center lg:self-end lg:pr-10 lg:gap-5">
          <div className="flex flex-row gap-2 items-center">
            {socials.map((social, index) => (
              <SocialIcon
                key={index}
                handleClick={onClick}
                label={social.label}
                link={social.link}
                className={social.className}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </div>
          <DownloadButton />
        </div>
      </motion.div>

      <motion.div
        variants={MAIN_VARIANTS}
        initial={"hiddenright"}
        animate={"visible"}
        className="space-y-5 justify-between flex-col py-4 lg:py-0 lg:flex flex-1 lg:pl-8"
      >
        <div className="space-y-4 text-stone-700 font-playfairDisplay dark:text-stone-200">
          <FadeDown text={t("aboutme")} />
          <p className="tracking-wider font-medium">{t("aboutmedesc")}</p>
        </div>
        <div className="flex flex-row gap-2 justify-between items-end">
          <div className="text-xs">
            <TechIcons />
          </div>
          <Button className="w-fit px-6 font-geistMono" onClick={scrollToAboutMe}>
            {t("aboutbtn")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

interface SocialProps {
  children: React.ReactNode;
  link?: string;
  handleClick: (link?: string) => void;
  label: string;
  className?: string;
}

/**
 * List of social icons showed in the hero
 * @param children
 * @param link
 * @param handleClick
 * @param label
 * @param className
 * @constructor
 */
const SocialIcon: React.FC<SocialProps> = ({
  children,
  link,
  handleClick,
  label,
  className,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => handleClick(link ?? undefined)}
          className={className}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

/**
 * List of the technologies I use
 * @constructor
 */
const TechIcons: React.FC = () => {
  const tech = [
    { name: "Angular", icon: <FaAngular /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Java", icon: <FaJava /> },
  ];

  return (
    <div className="flex flex-row space-x-3">
      {tech.map((t, index) => (
        <motion.div
          initial={{ rotate: -45 + index * 10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 + index * 0.25 }}
          className="flex flex-col items-center"
          key={index}
        >
          <p className="text-xs font-geistMono">{t.name}</p>
          <span className="text-3xl">{t.icon}</span>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Sets if I'm currently looking for work or not.
 * @param status
 * @constructor
 */
const WorkStatus: React.FC<{ status: "open" | "closed" }> = ({ status }) => {
  const t = useTranslations("thehero");
  const message = status === "open" ? t("opentowork") : t("working");
  const statusClasses = {
    open: "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200",
    closed: "bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200",
  };
  const classes = twMerge(
    statusClasses[status],
    "font-geistVF tracking-tighter px-4 rounded-xl w-fit flex flex-row items-center gap-2",
  );
  const dotClasses =
    status === "open"
      ? "bg-green-300 border-green-800"
      : "bg-amber-300 border-amber-800";
  return (
    <div className={classes}>
      <BreathingDot className={dotClasses} />
      <p className="">{message}</p>
    </div>
  );
};

export default TheHero;
