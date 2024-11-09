"use client";

import { Button } from "@/components/ui/button";
import { FC, ReactNode } from "react";

const OutsideLinkButton: FC<{
  link: string | undefined;
  children: ReactNode;
}> = ({ link, children }) => {
  const handleClick = (link: string | undefined) => {
    if (!link) return;
    window.open(link, "_blank");
  };

  return (
    <Button onClick={() => handleClick(link)} className="w-fit">
      {children}
    </Button>
  );
};

export default OutsideLinkButton;
