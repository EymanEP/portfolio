"use client";
import { FC, useState } from "react";
import { FadeDown } from "@/components/ui/FadeDown";
import { FaGithub, FaJava, FaUnity } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import useIsMobile from "@/helpers/useIsMobile";
import BreathingDot from "@/components/atoms/BreathingDot";
import { ArrowTopRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import Modal from "@/components/molecules/Modal";
import { Project, Technology } from "@/interfaces/Project";

const project: Project = {
  title: "The Project",
  image: "/150x150.png",
  shortDescription:
    "This is a project made with idk what technologies and its supposed to do this and this",
  technologies: [
    { key: "Java", icon: <FaJava /> },
    { key: "Unity", icon: <FaUnity /> },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum vulputate nibh vitae pharetra. Integer et rutrum ante. Morbi at dictum sem. Curabitur lacinia velit nec quam molestie dapibus. Etiam congue nulla non erat dapibus, in consequat justo hendrerit.",
  githubLink: "",
  deploymentLink: "fsfda",
  type: "Fullstack",
};

const TheProjects: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const cardClicked = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-col gap-8 text-stone-700 dark:text-stone-200">
      <FadeDown text={"Projects"} className="font-playfairDisplay" />
      <Card project={project} onCardClicked={cardClicked} />

      <ProjectModal isOpen={isOpen} onClose={toggleModal} project={project} />
    </div>
  );
};

export default TheProjects;

const Card: FC<{ project: Project; onCardClicked: () => void }> = ({
  project,
  onCardClicked,
}) => {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useIsMobile();

  const CARD_VARIANTS = {
    hidden: { opacity: 0, scale: 0.75, transition: { ease: "easeInOut" } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    hover: { scale: 1.05 },
    tap: { scale: 1.1 },
  };

  const CONTAINER_VARIANTS = {
    default: { y: 80 },
    hover: { y: -20, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const DESCRIPTION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      variants={CARD_VARIANTS}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onCardClicked()}
      whileInView={"visible"}
      whileHover={"hover"}
      whileTap={"tap"}
      className="relative text-white flex flex-col p-4 rounded-lg shadow-lg gap-6 h-80
      w-full max-w-96 overflow-hidden group hover:cursor-pointer"
    >
      <div className="absolute left-0 top-0 h-full w-full z-0">
        <span className="absolute bg-black w-full h-full opacity-80 z-[8]" />
        <Image
          src={project.image}
          alt={project.title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-75"
        />
      </div>
      <div className="z-10 flex flex-row justify-between gap-2">
        <div className="flex flex-row gap-2">
          {project.deploymentLink && (
            <span className="flex flex-row gap-1 items-center bg-green-800 rounded-full px-2 py-0.5 text-green-100">
              <BreathingDot className="bg-green-300 border-green-800" />
              <p className="font-geistMono text-xs">Online</p>
            </span>
          )}
          <FaGithub className="text-2xl" />
        </div>
        <ArrowTopRightIcon />
      </div>
      <div className="flex flex-row gap-5 w-full h-full items-end justify-between z-10">
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial={"default"}
          animate={
            isHover && !isMobile ? "hover" : isMobile ? "hover" : "default"
          }
          className="space-y-4"
        >
          <h2 className="font-playfairDisplay text-2xl">{project.title}</h2>
          <motion.p
            initial="hidden"
            animate={
              isHover && !isMobile
                ? "visible"
                : isMobile
                  ? "visible"
                  : "default"
            }
            variants={DESCRIPTION_VARIANTS}
            className="font-geistMono tracking-tighter"
          >
            {project.shortDescription}
          </motion.p>
        </motion.div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechnologiesList technologies={project.technologies} />
        </div>
      </div>
    </motion.div>
  );
};

const TechnologiesList: FC<{ technologies: Technology[] }> = ({
  technologies,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {technologies.map((item, index) => (
        <div key={index} className="text-4xl flex flex-col items-center">
          {item.icon} <p className="text-xs">{item.key}</p>
        </div>
      ))}
    </div>
  );
};

const ProjectModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}> = ({ isOpen, onClose, project }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-5 text-stone-800 dark:text-stone-200">
        <div className="flex flex-row justify-between items-center">
          <FadeDown className="font-playfairDisplay" text={project.title} />
          <Cross1Icon
            onClick={onClose}
            className="size-6 text-stone-800 dark:text-stone-200 self-end hover:cursor-pointer"
          />
        </div>
        <div className="w-full h-auto max-h-72 rounded-lg overflow-hidden shadow-lg flex items-center">
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>{project.description}</p>
        </div>
      </div>
    </Modal>
  );
};
