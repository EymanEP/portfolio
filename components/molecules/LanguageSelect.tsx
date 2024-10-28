"use client";
import Select from "@/components/atoms/Select";

const languages = [
    {label: "EN", value: "en"},
    {label: "ES", value: "es"},
    {label: "BG", value: "bg"},
];

const LanguageSelect = () => {
    const selectLanguage = (value: string) => {
        console.log(value);
    }

    return (
        <Select options={languages} onSelect={selectLanguage} defaultSelect={languages[0]}/>
    )
}

export default LanguageSelect;