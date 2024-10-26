import React from "react";

export default function Home() {
    return (
        <div>
            <section id="home" className="h-screen bg-black text-white flex items-center justify-center">
                <h2 className="text-3xl">Home Section</h2>
            </section>
            <section id="about" className="h-screen bg-black text-white flex items-center justify-center">
                <h2 className="text-3xl">About Section</h2>
            </section>
            <section id="projects" className="h-screen bg-black text-white flex items-center justify-center">
                <h2 className="text-3xl">Projects Section</h2>
            </section>
            <section id="contact" className="h-screen bg-black text-white flex items-center justify-center">
                <h2 className="text-3xl">Contact Section</h2>
            </section>
        </div>
    );
}
