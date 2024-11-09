interface Tab {
  link: string;
  value: string;
}

const NavbarTabs: Tab[] = [
  { value: "home", link: "#home" },
  { value: "about", link: "#aboutme" },
  { value: "experience", link: "#experience-studies" },
  { value: "projects", link: "#projects" },
  { value: "certifications", link: "#certifications" },
  { value: "contact", link: "#contact" },
];

export default NavbarTabs;
