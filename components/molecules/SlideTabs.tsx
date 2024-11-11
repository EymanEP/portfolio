import React from "react";
import {useTranslations} from "next-intl";
import Cursor from "@/components/atoms/Cursor";
import Position from "@/interfaces/Position";
import NavbarTabs from "@/data/NavbarTabs";
import {usePathname, useRouter} from "next/navigation";
import {scrollToHTMLElement} from "@/utils/scrollUtils";

/**
 * Contains all the Tabs with the links
 * @constructor
 */
const SlideTabs: React.FC = () => {
  const [position, setPosition] = React.useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  const t = useTranslations("navbar.links");

  return (
    <div
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="relative flex flex-row self-center p-0.5 rounded-full bg-black dark:bg-stone-800 w-fit"
    >
      {NavbarTabs.map((tab, index) => (
        <Tab
          setPosition={setPosition}
          key={index}
          label={t(tab.value)}
          link={tab.link}
        />
      ))}
      <Cursor
        className="bg-stone-800 mix-blend-difference rounded-full"
        position={position}
      />
    </div>
  );
};

export default SlideTabs;

interface TabProps {
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  label: string;
  link: string;
}

/**
 * Link anchor or Tab
 * @param label
 * @param link
 * @param setPosition
 * @constructor
 */
const Tab: React.FC<TabProps> = ({ label, link, setPosition }) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      if (pathname === "/en" || pathname === "/es" || pathname === "/bg") {
        scrollToHTMLElement(link);
      } else {
        router.push(`/${link}`);
      }
    }
  };
  return (
    <a
      href={link}
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width, height } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
          height,
        });
      }}
      className="relative z-10 block px-1 py-1 text-xs uppercase text-white mix-blend-difference
           md:px-3 md:py-3 lg:px-5"
    >
      {label}
    </a>
  );
};
