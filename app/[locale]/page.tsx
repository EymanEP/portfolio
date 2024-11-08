import React from "react";
import TheHero from "@/components/organisms/TheHero";
import TheExperience from "@/components/organisms/TheExperience";
import TheProjects from "@/components/organisms/TheProjects";
import TheCertifications from "@/components/organisms/TheCertifications";
import TheAbout from "@/components/organisms/TheAbout";
import TheContact from "@/components/organisms/TheContact";

export default async function Home() {
  return (
    <div className="xl:flex justify-center pb-32">
      <div className="px-6 md:px-24 lg:px-28 xl:max-w-[1100px] flex flex-col gap-20">
        <section
          id="home"
          className="h-screen flex flex-col justify-center"
        >
          <TheHero />
        </section>
        <section
          id="experience-studies"
          className="flex flex-col"
        >
          <TheExperience />
        </section>
        <section
          id="projects"
          className="flex flex-col justify-center"
        >
          <TheProjects />
        </section>
        <section
          id="certifications"
          className="flex flex-col justify-center"
        >
          <TheCertifications />
        </section>
        <section
          id="aboutme"
          className="flex flex-col justify-center"
        >
          <TheAbout />
        </section>
        <section id="contact" className="flex flex-col justify-center">
          <TheContact />
        </section>
      </div>
    </div>
  );
}
