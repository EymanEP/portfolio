"use client";
import ContactForm from "@/components/molecules/ContactForm";
import { FadeDown } from "@/components/ui/FadeDown";
import Description from "@/components/atoms/Description";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TheContact() {
  const t = useTranslations("thecontact");
  return (
    <div className="flex flex-col text-stone-700 dark:text-stone-200 gap-5">
      <FadeDown className="font-playfairDisplay" text={t("title")} />
      <Description sentence={t("description")} />
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, all: 0.5}}
      >
        <ContactForm />
      </motion.span>
    </div>
  );
}
