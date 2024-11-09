export const scrollToHTMLElement = (element: string) => {
  const targetElement = document.querySelector(element);
  if (!targetElement) return;
  targetElement.scrollIntoView({ behavior: "smooth" });
};