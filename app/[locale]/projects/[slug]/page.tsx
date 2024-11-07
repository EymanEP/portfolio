import { Projects } from "@/data/Projects";
import { FadeDown } from "@/components/ui/FadeDown";
import { SwipeCarousel } from "@/components/molecules/SwipeCarousel";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectExists = Projects.some((project) => project.id === slug);
  const project = Projects.find((project) => slug === project.id);

  if (!projectExists) return <p>Page not found</p>;

  const paragraphs = project?.description.split("\n");

  return (
    <div className="mt-20 flex flex-col h-full lg:items-center">
      <SwipeCarousel imgs={project!.images} />
      <div className="px-6 md:px-24 lg:px-28 xl:max-w-[1100px] pb-10 flex flex-col gap-8 text-stone-800 dark:text-stone-200">
        <FadeDown
          className="text-4xl font-playfairDisplay"
          text={project!.title}
        />
        <p className="bg-amber-200 w-fit px-2 rounded-full text-sm font-geistVF tracking-tighter dark:bg-amber-400 dark:text-black">
          Type: {project?.type}
        </p>
        {paragraphs!.map((p, index) => (
          <p key={index} className="font-geistMono tracking-tighter text-xl text-justify">
            {p}
          </p>
        ))}
        <Button className="w-fit">
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </div>
  );
}
