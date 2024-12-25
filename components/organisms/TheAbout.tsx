"use client";

import { useTranslations } from "next-intl";
import { FadeDown } from "@/components/ui/FadeDown";
import Description from "@/components/atoms/Description";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToHTMLElement } from "@/utils/scrollUtils";

export default function TheAbout() {
  const t = useTranslations("theabout");
  const paragraphs = t("paragraph").split("\n");

  return (
    <div className="flex flex-col text-stone-700 dark:text-stone-200 gap-5 overflow-hidden">
      <FadeDown text={t("title")} className="font-playfairDisplay" />
      <Description sentence={t("description")} />
      <div className="grid grid-flow-row md:grid-flow-col gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full h-auto rounded-md overflow-hidden shadow-md"
        >
          <Image
            src="/album/photo-moto.JPEG"
            alt="Its a photo of my motorcycle"
            width={1200}
            height={1300}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="font-geistMono tracking-tighter leading-tight space-y-4 flex-grow text-stone-700 dark:text-stone-200">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              key={i}
            >
              {paragraph}
            </motion.p>
          ))}
          <Button className="w-fit px-6 font-geistMono" onClick={() => scrollToHTMLElement("#contact")}>
            {t("contact")}
          </Button>
        </div>
      </div>
    </div>
  );
}
