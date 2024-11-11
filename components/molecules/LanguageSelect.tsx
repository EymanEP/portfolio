"use client";
import Select from "@/components/atoms/Select";
import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const languages = [
  { label: "EN", value: "en" },
  { label: "ES", value: "es" },
  { label: "BG", value: "bg" },
];

const LanguageSelect = () => {
  const router = useRouter();
  const locale = useLocale();
  const [selected, setSelected] = React.useState(
    languages.find((lang) => lang.value === locale) || languages[0],
  );

  const selectLanguage = (lang: { label: string; value: string }) => {
    setSelected(lang);

    const currentPath = window.location.pathname.replace(/^\/(en|es|bg)/, "");
    router.push(`/${lang.value}${currentPath}`);
  };

  return (
    <Select
      options={languages}
      onSelect={selectLanguage}
      defaultSelect={selected}
    />
  );
};

export default LanguageSelect;
