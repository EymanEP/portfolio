"use client";
import ContactForm from "@/components/molecules/ContactForm";
import { FadeDown } from "@/components/ui/FadeDown";
import Description from "@/components/atoms/Description";
import React from "react";
import { useTranslations } from "next-intl";

export default function TheContact() {
  const t = useTranslations("thecontact");
  return (
    <div className="flex flex-col text-stone-700 dark:text-stone-200 gap-5">
      <FadeDown className="font-playfairDisplay" text={t("title")} />
      <Description sentence={t("description")} />
      <ContactForm />
    </div>
  );
}
