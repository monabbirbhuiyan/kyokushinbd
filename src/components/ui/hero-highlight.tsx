"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import React from "react";

export const HeroHighlight = ({
  children,
  containerClassName,
}: {
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return (
    <div
      className={cn(
        "relative h-[80rem] flex items-center bg-black dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={"/assets/Kanjitorn.png"}
        height={1200}
        width={1200}
        alt="Kanji"
        className="absolute opacity-20 items-center justify-center"
      />
      <div className="absolute inset-0 pointer-events-none bg-dot-thick-neutral-900 dark:bg-dot-thick-neutral-800" />
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 pointer-events-none bg-dot-thick-gray-200 dark:bg-dot-thick-gray-200 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      {/* Centered children */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};
