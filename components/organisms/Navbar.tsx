"use client";

import EffectButton from "@/components/atoms/EffectButton";
import React from "react";
import ThemeButton from "@/components/molecules/ThemeButton";
import LanguageSelect from "@/components/molecules/LanguageSelect";
import SlideTabs from "@/components/molecules/SlideTabs";
import useIsMobile from "@/helpers/useIsMobile";
import SideBar from "@/components/molecules/SideBar";
import SideBarButton from "@/components/atoms/SideBarButton";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";


const Navbar: React.FC = () => {
    const [sideBar, setSideBar] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
    const {scrollY} = useScroll();
    const isMobile = useIsMobile();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (!previous) return;

        return (latest > previous && latest > 150) ? setHidden(true) : setHidden(false);
    })

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 py-2 px-5 font-jetbrainsMono
             flex justify-between items-center overflow-x-hidden"
                variants={{
                    visible: {y: 0},
                    hidden: {y: "-100%"}
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={{duration: 0.3, ease: "easeInOut"}}
            >
                <EffectButton>EP</EffectButton>
                {
                    !isMobile && (
                        <div
                            className="p-0.5 lg:p-1 rounded-full hidden border-2 border-black dark:border-stone-700 md:block">
                            <SlideTabs/>
                        </div>
                    )
                }
                <div className="flex flex-row gap-2 items-center">
                    <LanguageSelect/>
                    <ThemeButton/>
                    {
                        isMobile && (
                            <>
                                <SideBarButton sideBar={sideBar} setSideBar={setSideBar}/>
                            </>
                        )
                    }
                </div>
            </motion.nav>
            <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
        </>)
}

export default Navbar;