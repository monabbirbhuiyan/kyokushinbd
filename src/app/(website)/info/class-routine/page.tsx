"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";

const ClassRoutine = () => {
  const images = [
    "/assets/info/dojo.jpg",
    "/assets/info/dojo2.jpg",
    "/assets/info/summercamp.jpg",
  ];
  return (
    <>
      <div className="w-full pt-20">
        {/* Hero */}
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center pt-10"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Class Routine
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>

        {/* Class Routine */}
        <div className="container mx-auto my-5">
          <div className="flex w-full h-full items-center justify-center pt-5">
            <Image
              src={"/assets/info/classroutine.jpg"}
              height={1000}
              width={1000}
              alt="Class Routine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassRoutine;
