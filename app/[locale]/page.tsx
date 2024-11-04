import React from "react";
import TheHero from "@/components/organisms/TheHero";
import TheExperience from "@/components/organisms/TheExperience";

export default async function Home() {
    return (
        <div className="xl:flex justify-center">
            <div className="px-6 md:px-24 lg:px-28 xl:max-w-[1100px]">
                <section id="home" className="h-screen text-black flex flex-col justify-center dark:text-white">
                    <TheHero/>
                </section>
                <section id="about" className="h-screen text-black flex flex-col justify-center dark:text-white">
                    <TheExperience/>
                </section>
                <section id="projects" className="h-screen text-black dark:text-white flex items-center justify-center">
                    <h2 className="text-3xl">Projects Section</h2>
                </section>
                <section id="contact" className="h-screen text-black dark:text-white flex items-center justify-center">
                    <h2 className="text-3xl">Contact Section</h2>
                </section>
            </div>
        </div>
    );
}
