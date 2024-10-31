import React from "react";
import Image from "next/image";
import {BorderBeam} from "@/components/ui/border-beam";

interface Props {
    src: string;
    alt: string;
}

const Avatar: React.FC<Props> = ({src, alt}) => {
    return (
        <div className="relative w-24 h-24 shadow-lg rounded-full overflow-hidden md:w-32 md:h-32 lg:w-40 lg:h-40">
            <Image src={src} alt={alt} width={500} height={500} className="object-cover pointer-events-none"/>
            <BorderBeam borderWidth={3} size={200} />
        </div>
    )
}

export default Avatar;