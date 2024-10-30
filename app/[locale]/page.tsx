import React from "react";

export default async function Home() {
    return (
        <div>
            <section id="home" className="h-screen text-black dark:text-white flex items-center justify-center">
                <h2 className="text-3xl">HOME Section</h2>
            </section>
            <section id="about" className="h-screen text-black dark:text-white flex items-center justify-center">
                <h2 className="text-3xl">About Section</h2>
            </section>
            <section id="projects" className="h-screen text-black dark:text-white flex items-center justify-center">
                <h2 className="text-3xl">Projects Section</h2>
            </section>
            <section id="contact" className="h-screen text-black dark:text-white flex items-center justify-center">
                <h2 className="text-3xl">Contact Section</h2>
            </section>
        </div>
    );
}
