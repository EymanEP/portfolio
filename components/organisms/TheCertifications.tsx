"use client";
import React from "react";
import {FadeDown} from "@/components/ui/FadeDown";
import Description from "@/components/atoms/Description";
import {useTranslations} from "next-intl";

const TheCertifications = () => {
    const t = useTranslations("thecertifications")
    return (
        <div className="flex flex-col text-stone-700 dark:text-stone-200 gap-5">
            <FadeDown className="font-playfairDisplay" text={t("title")} />
            <Description sentence={t("description")} />

        </div>
    )
}

export default TheCertifications;