"use client";
import Select from "@/components/atoms/Select";
import React from "react";

const languages = [
    {label: "EN", value: "en"},
    {label: "ES", value: "es"},
    {label: "BG", value: "bg"},
];

const LanguageSelect = () => {
    const [selected, setSelected] = React.useState({label: "EN", value: "en"});
    const selectLanguage = (value: { label: string, value: string }) => {
        setSelected(value);
    }

    return (
        <Select options={languages} onSelect={selectLanguage} defaultSelect={selected}/>
    )
}

export default LanguageSelect;