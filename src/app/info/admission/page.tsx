"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

const Admission = () => {
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
              Admission
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-rose-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>

        {/* Admission */}
        <div className="container mx-auto my-5">
          <h2 className="text-center text-rose-600 font-bold text-4xl">
            Admissoin Rules and Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full container">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Admission Fee: Tk 7,000 /-
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Includes 1st Month Monthly Fee which is Tk 2000 /- per month and
                1 set of Karate Uniform (Dogi)
              </p>
            </div>
            <Image
              src="/assets/info/admission1.png"
              width={250}
              height={250}
              alt="linear demo image"
              className="absolute right-4 lg:right-1 lg:top-3 grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Monthly Fee: Tk 2000 /-
            </h2>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Need Another set of Dogi?
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                The Dogi price is Tk 2000/- which comes with the karate uniform
                shirt and the pant
              </p>
            </div>
            <Image
              src="/assets/info/dogi.jpg"
              width={200}
              height={200}
              alt="linear demo image"
              className="absolute -right-1 md:right-[5%] lg:right-[5%] -bottom-4 lg:top-4 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </>
  );
};

export default Admission;
