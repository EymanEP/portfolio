import EffectButton from "@/app/components/atoms/EffectButton";

const Navbar = () => {
    return (<nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md px-5 py-2 font-jetbrainsMono
             flex justify-between`}
    >
        <EffectButton>EP</EffectButton>
    </nav>)
}

export default Navbar;