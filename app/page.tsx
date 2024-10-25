import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-dvh w-dvw">
            <div className="w-3/5 self-center">
                <img src="/under-construction.png" className="w-full h-full object-cover"
                     alt="illustration of people working" />
            </div>
            <h1 className="text-3xl font-bold text-slate-700 text-center">This site is under construction</h1>
            <p className="text-slate-500">This site will be available soon.</p>
        </div>
    );
}
