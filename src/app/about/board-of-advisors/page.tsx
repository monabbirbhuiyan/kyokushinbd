import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BoardOfAdvisors = () => {
  return (
    <>
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-s2 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white dark:text-white">
          Board of Advisors
        </p>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] mt-8"
          )}
          height={10}
          width={10}
        />
      </div>

      <div className="grid w-full gap-1 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center justify-center mb-5">
        {/* 1 */}
        <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/boa/shahjahan-bhuiyan.jpg"
                height="500"
                width="500"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
            >
              Md. Shahjahan Bhuiyan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
            >
              Managing Director
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Fashion Makers Ltd.
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 2 */}
        <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/boa/shawkat-hossain.jpg"
                height="500"
                width="500"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
            >
              Shawkat Hossain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
            >
              Managing Director
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              BD Venture Ltd.
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 3 */}
        <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/boa/bobby-hajjaz.jpg"
                height="500"
                width="500"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
            >
              Bobby Hajjaj
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
            >
              Professor
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              North South University
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 4 */}
        <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/boa/dr-popel.jpg"
                height="500"
                width="500"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
            >
              Dr. Rashed Mohammad Khan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
            >
              Professor and Head of Dermatology
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Dhaka Medical College
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 5 */}
        <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/boa/fatema-tuz-zohora.jpg"
                height="500"
                width="500"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
            >
              Fatema Tuz Zohra
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
            >
              Artist
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default BoardOfAdvisors;
