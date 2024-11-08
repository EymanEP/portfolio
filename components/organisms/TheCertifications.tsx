"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { FadeDown } from "@/components/ui/FadeDown";
import Description from "@/components/atoms/Description";
import { useLocale, useTranslations } from "next-intl";
import Certificate from "@/interfaces/Certificate";
import Lang from "@/interfaces/Lang";
import Certifications from "@/data/Certifications";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ArrowTopRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import Modal from "@/components/molecules/Modal";
import { PiCertificate } from "react-icons/pi";
import { motion } from "framer-motion";

export default function TheCertifications() {
  const t = useTranslations("thecertifications");
  const [cert, setCert] = useState<Certificate | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const certClicked = (certificate: Certificate) => {
    setCert(certificate);
    setIsOpen(true);
  };

  const GRID_VARIANTS = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  return (
    <div className="flex flex-col text-stone-700 dark:text-stone-200 gap-5">
      <FadeDown className="font-playfairDisplay" text={t("title")} />
      <Description sentence={t("description")} />
      <motion.div
        variants={GRID_VARIANTS}
        initial={"hidden"}
        animate={"visible"}
        className="grid grid-cols-1 gap-2 md:grid-cols-2"
      >
        {Certifications.map((cert, index) => (
          <CertificateCard
            index={index}
            key={cert.id}
            cert={cert}
            certClicked={certClicked}
          />
        ))}
      </motion.div>

      {cert && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent onClose={setIsOpen} cert={cert} />
        </Modal>
      )}
    </div>
  );
}

const CertificateCard: FC<{
  cert: Certificate;
  certClicked: (certificate: Certificate) => void;
  index: number;
}> = ({ cert, certClicked, index }) => {
  const locale = useLocale() as keyof Lang;
  const imgBg =
    cert.foundation === "FreecodeCamp"
      ? "bg-black"
      : cert.foundation === "OpenWebinars"
        ? "bg-white"
        : null;

  const CARD_VARIANTS = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: index * 0.2 } },
    tap: {
      scale: 1.02,
      transition: { type: "spring", bounce: 0.5, ease: "linear" },
    },
  };
  return (
    <motion.div
      variants={CARD_VARIANTS}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      whileTap={"tap"}
      onClick={() => certClicked(cert)}
      className="p-2 shadow-md rounded-md flex flex-row gap-4 relative bg-white dark:bg-[#111D] cursor-pointer"
    >
      <span className="absolute right-0 p-1.5">
        <ArrowTopRightIcon />
      </span>
      <div
        className={twMerge(
          "min-w-12 min-h-12 h-12 w-12 p-1 flex items-center rounded-lg justify-center overflow-hidden",
          imgBg,
        )}
      >
        <Image
          src={cert.image}
          alt={cert.name[locale]}
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-6 flex-grow mr-2 justify-around">
        <div>
          <h3 className="font-geistMono font-bold tracking-tighter leading-tight">
            {cert.name[locale]}
          </h3>
          <h4 className="font-geistMono font-semibold tracking-tighter leading-tight text-sm bg-stone-300 text-stone-700 w-fit px-1 rounded-sm dark:bg-stone-700 dark:text-stone-300">
            {cert.foundation} - {cert.date}
          </h4>
        </div>
        <p className="text-xs self-end uppercase font-semibold">
          {cert.category[locale]}
        </p>
      </div>
    </motion.div>
  );
};

const ModalContent: FC<{
  cert: Certificate;
  onClose: Dispatch<SetStateAction<boolean>>;
}> = ({ cert, onClose }) => {
  const locale = useLocale() as keyof Lang;
  const imgBg =
    cert.foundation === "FreecodeCamp"
      ? "bg-black"
      : cert.foundation === "OpenWebinars"
        ? "bg-white"
        : null;

  return (
    <div className="w-full h-full text-stone-700 dark:text-stone-200 flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center gap-3">
        <h4 className="text-xl font-playfairDisplay font-bold tracking-tighter">
          {cert.foundation}
        </h4>
        <button onClick={() => onClose(false)} className="p-1">
          <Cross1Icon className="size-6" />
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <div
          className={twMerge(
            "min-w-24 min-h-24 h-24 w-24 p-1 flex items-center rounded-lg justify-center overflow-hidden",
            imgBg,
          )}
        >
          <Image
            src={cert.image}
            alt={cert.name[locale]}
            width={100}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1 font-geistMono tracking-tighter font-semibold text-stone-600 dark:text-stone-300">
          <h3 className="text-xl max-w-sm font-geistMono text-stone-700 dark:text-stone-200 tracking-tighter font-bold leading-tighter">
            {cert.name[locale]}
          </h3>
          <p className="">{cert.duration[locale]}</p>
          <p className="text-sm">{cert.date}</p>
          <span className="bg-stone-200 dark:bg-stone-700 w-fit px-2 rounded-md uppercase text-xs font-bold">
            {cert.category[locale]}
          </span>
          <div className="flex flex-row flex-wrap gap-2 items-center">
            <span
              className="text-2xl bg-black text-white dark:bg-white dark:text-stone-800 rounded-md p-0.5 w-fit cursor-pointer"
              onClick={() => window.open(cert.link, "_blank")}
            >
              <PiCertificate />
            </span>
            {cert.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-sm tracking-tighter px-2 bg-indigo-200 text-stone-800 dark:bg-indigo-400 dark:text-stone-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
