"use client";
import { FC } from "react";
import { FadeDown } from "@/components/ui/FadeDown";
import { Project } from "@/interfaces/Project";
import { Projects } from "@/data/Projects";
import Image from "next/image";
import { FaGithub, FaGoogleDrive } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/routing";
import Description from "@/components/atoms/Description";

const TheProjects: FC = () => {
  const GRID_CONTAINER = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const t = useTranslations("theprojects");

  return (
    <div className="flex flex-col gap-8 text-stone-700 dark:text-stone-200">
      <FadeDown text={t("title")} className="font-playfairDisplay" />
      <Description sentence={t("description")} />
      <motion.div
        variants={GRID_CONTAINER}
        intial={"hidden"}
        animate={"visible"}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {Projects.map((project, index) => (
          <Card index={index} key={index} project={project} />
        ))}
      </motion.div>
      <Description sentence={t("seemoreprojects")} />
      <Button
        className="w-fit"
        onClick={() => window.open("https://www.github.com/EymanEP", "_blank")}
      >
        <FaGithub /> Github
      </Button>
    </div>
  );
};

export default TheProjects;

const Card: FC<{ project: Project; index: number }> = ({ project, index }) => {
  const t = useTranslations("theprojects");
  const locale = useLocale();
  const router = useRouter();
  const openLinkBlank = (link: string | undefined) => {
    if (!link) return;
    window.open(link, "_blank");
  };

  const openProject = () => {
    router.push(`/projects/${project.id}`);
  };

  const MAIN_CONTAINER_VARIANTS = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: index * 0.2 } },
    hover: { scale: 1.02, transition: { ease: "easeInOut" } },
    tap: {
      scale: 1.05,
      transition: { type: "spring", bounce: 0.5, ease: "linear" },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      whileTap={"tap"}
      whileHover={"hover"}
      variants={MAIN_CONTAINER_VARIANTS}
      className="w-full h-full flex flex-col bg-white dark:bg-[#111D] drop-shadow-sm rounded-lg"
    >
      <div className="flex-1 w-full h-52 md:h-80 rounded-t-lg shadow-lg overflow-hidden relative">
        <div className="absolute flex flex-row justify-between w-full items-center z-20 text-white p-3">
          <div className="bg-white w-fit h-fit rounded-full text-2xl p-1 text-black hover:cursor-pointer">
            {project.githubLink && (
              <FaGithub onClick={() => openLinkBlank(project.githubLink)} />
            )}
            {project.driveLink && (
              <FaGoogleDrive onClick={() => openLinkBlank(project.driveLink)} />
            )}
          </div>
          <span className="bg-white rounded-full p-1 text-black">
            <ArrowTopRightIcon className="text-3xl" />
          </span>
        </div>
        <span className="absolute z-10 bg-black w-full h-full bg-opacity-60" />
        <Image
          src={project.images[0]}
          alt={project.title + " photo"}
          height={700}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 shadow-lg h-fit p-4 flex flex-col gap-2 rounded-b-lg justify-around">
        <div className="space-y-2">
          <p className="bg-blue-200 dark:bg-blue-400 dark:text-black w-fit px-2 rounded-full text-sm font-geistVF tracking-tighter">
            {project.type}
          </p>
          <FadeDown
            text={project.title}
            className="font-playfairDisplay text-base"
          />
        </div>
        <p className="font-geistMono tracking-tighter">
          {project.shortDescription[locale as Locale]}
        </p>
        <Button onClick={() => openProject()}>{t("seemore")}</Button>
      </div>
    </motion.div>
  );
};
