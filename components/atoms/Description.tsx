import StaggeredFade from "@/components/ui/StaggeredFade";

const Description = ({sentence}: {sentence: string}) => {
    return <StaggeredFade className="tracking-tighter font-geistMono leading-tight" sentence={sentence} />
}

export default Description;