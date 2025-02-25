import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ExecutiveCommittee = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-s2 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white dark:text-white">
          Executve Committee
        </p>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] mt-8"
          )}
          height={10}
          width={10}
        />
      </div>

      {/* 1 */}
      <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[630px] w-[200px] rounded-xl p-6 border ">
          <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
            <Image
              src="/assets/ec/dr-iftekhar-ahmed-chowdhury.jpg"
              height="300"
              width="300"
              className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
          >
            President
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
          >
            Dr. Iftekhar Ahmed Chowdhury
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
          >
            Diplomat and Educator
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
          >
            Former Advisor, Ministry of Foreign Affairs,
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
          >
            Caretaker Government of Bangladesh
          </CardItem>
        </CardBody>
      </CardContainer>

      <div className="container grid w-full gap-10 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center justify-center mb-5">
        {/* 2 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/mamun.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Vice-President
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Md. Shakawat Hossain Mamun
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Vice Chairman, Bhaiya Group of
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Industries Dhaka, Bangladesh
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 3 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/quadir.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Vice-President
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Mohammad Abdul Quadir
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Former General Secretary
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              ​Bangladesh Judo Federation
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 4 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/pintu.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Vice-President
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Tofazzal Hossain Bhuiyan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Head of Bangladesh Operations
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Servier Pharmaceuticals​
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 5 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/monir-bhuiyan.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              General Secretary
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Monir Ahmed Bhuiyan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Branch Chief
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              IKO Kyokushin Bangladesh
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 6 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/arifur-rahman.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Joint Secretary
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Arifur Rahman
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Branch Chief
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              IKO Kyokushin Bangladesh
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 7 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/habib.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Joint Secretary
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Ahsan Habib
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Asst. General Manager
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Premier Cement Mills
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Memebers */}
        {/* 8 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/farhadul-haque.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Treasurer
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Farhadul Haque
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Chairman
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Hanasan Art Gallery
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 9 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/sumon.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Member
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Shahariyajjaman Sumon
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Instructor, ​IKO Kyokushin BD
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Haluaghat Branch
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 10 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/ricky.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Member
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Mathew Ricky ​Gomes
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Teacher
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 11 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/obaidur.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Member
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Obaidur Rahman
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Instructor, IKO Kyokushin BD
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              DOHS Mohakhali Branch
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 12 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/srabosti-das.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Member
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Shrabosti Das
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Architect
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* 13 */}
        <CardContainer className="nter-var max-w-xs sm:max-w-sm lg:max-w-md mt-10  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-[600px] w-[200px] rounded-xl p-6 border ">
            <CardItem translateZ="100" className="w-[300px] mt-4 mx-auto ">
              <Image
                src="/assets/ec/raisa-choudhury.jpg"
                height="300"
                width="300"
                className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl flex items-center justify-center"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Member
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mt-5 mx-auto"
            >
              Raisa Sharmin Choudhury
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Senior Program Manager
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mx-auto"
            >
              Tech, ShopUp
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
