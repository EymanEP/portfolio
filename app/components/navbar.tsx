import Button from "@/app/components/atoms/Button";

const Navbar = () => {
    return (<nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md px-5 py-2 font-jetbrainsMono
             flex justify-between`}
    >
        <Button>EP</Button>
    </nav>)
}

export default Navbar;