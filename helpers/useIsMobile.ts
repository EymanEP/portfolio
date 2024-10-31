import React from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth < 770);

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return isMobile;
}

export default useIsMobile;