import { Projects } from "@/data/Projects";
import { FadeDown } from "@/components/ui/FadeDown";
import { SwipeCarousel } from "@/components/molecules/SwipeCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import OutsideLinkButton from "@/components/atoms/OutsideLinkButton";
import { ArrowLeft } from "lucide-react";
import { Locale } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = await getTranslations("theprojects");
  const locale = await getLocale();
  const { slug } = await params;
  const projectExists = Projects.some((project) => project.id === slug);
  const project = Projects.find((project) => slug === project.id);

  if (!projectExists)
    return (
      <div className="flex h-dvh w-dvw bg-stone-50 text-stone-700 dark:bg-black dark:text-stone-200 items-center justify-center text-5xl font-playfairDisplay tracking-tighter">
        404 | Page not found
      </div>
    );

  const paragraphs = project?.description[locale as Locale].split("\n");

  return (
    <div className="mt-20 flex flex-col h-full lg:items-center">
      <SwipeCarousel imgs={project!.images} />
      <div className="px-6 md:px-24 lg:px-28 xl:max-w-[1100px] pb-20 flex flex-col gap-8 text-stone-800 dark:text-stone-200">
        <FadeDown
          className="text-4xl font-playfairDisplay"
          text={project!.title}
        />
        <p className="bg-amber-200 w-fit px-2 rounded-full text-sm font-geistVF tracking-tighter dark:bg-amber-400 dark:text-black">
          Type: {project?.type}
        </p>
        {paragraphs!.map((p, index) => (
          <p
            key={index}
            className="font-geistMono tracking-tighter leading-tight text-xl text-justify"
          >
            {p}
          </p>
        ))}
        <div className="flex flex-row justify-between">
          <Button className="w-fit flex flex-row gap-2 items-center self-start ">
            <ArrowLeft />
            <Link href="/">{t("goback")} </Link>
          </Button>
          {project?.deploymentLink && (
            <Button className="w-fit">{t("seedeployment")}</Button>
          )}
          {project?.githubLink ? (
            <OutsideLinkButton link={project.githubLink}>
              {t("seecode")}
            </OutsideLinkButton>
          ) : project?.driveLink ? (
            <OutsideLinkButton link={project.driveLink}>
              {t("seeproject")}
            </OutsideLinkButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
