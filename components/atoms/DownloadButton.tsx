import { RainbowButton } from "@/components/ui/rainbow-button";
import { FileIcon } from "@radix-ui/react-icons";
import { useLocale, useTranslations } from "next-intl";

export default function DownloadButton() {
  const locale = useLocale();
  const t = useTranslations("thehero");
  const handleDownload = () => {
    const pdfUrl: string =
      locale === "es"
        ? "documents/CV_Eyman-Pashaliev.pdf"
        : locale === "en"
          ? "documents/CV_EymanPashaliev_ENG.pdf"
          : "documents/CV_Eyman-Pashaliev-BG.pdf";

    window.open(pdfUrl, "_blank");
  };
  return (
    <RainbowButton
      onClick={handleDownload}
      className="px-6 text-xs h-9 flex flex-row items-center gap-2 dark:bg-black"
    >
      <FileIcon />
      <p>{t("cv")}</p>
    </RainbowButton>
  );
}
