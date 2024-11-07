import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const Oyama = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Grand Master <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Sosai Mas. Oyama
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/profile/oyama1.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-fill md:object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        {/* Container for image and first paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama2.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3">
            The toughest man in the world, founder of Kyokushin Karate, Grand
            Master Masutatsu (Mas) Oyama was born in southwest Korea, a few
            miles from the coast of the Yellow Sea. The day was 27 of July 1923,
            and the place, Kimji - about 180 miles southwest of Seoul.
            <br />
            <br />
            His father was a renowned person name Sun Hyung. He was a well-to-do
            landowner and the mayor of the town (Kimji). Mas Oyama was the
            fourth son of Sun Hyung in a family of six boys and one girl. His
            childhood name is Hyung Yee. At a relatively young age he was sent
            to Manchuria, in Southern China, to live on his sister's farm. He
            had to walk six miles to school over a hill to Yongee Primary
            School. In school, he played soccer and took part in cross-country
            running. But most of his boyish enthusiasm was reserved for Chabee -
            a sort of Korean combination of jujutsu and Kempo.
            <br />
            <br />
            Chabee lessons were given at school by Mr. Yi and Hyung Yee never
            skipped this session. He was nine years old at the time. In a
            dramatic moment, Hyung Yee discovered a 40 year-old North Korean as
            a master. Every day for an hour in the evening, the North Korean
            farmhand drilled his enthusiastic young pupil in Chabee and Shaolin
            temple boxing.
            <br />
            <br />
            Each season Hyung Yee practiced under the expert eye of the North
            Korean until he was 13 years old - the year he went to Seoul to live
            with his aunt and attend junior high school in the capital. Next
            year at the tender age of 14, Hyung Yee left his native land for
            Japan to attend a boys' military academy in Yamanashi Prefecture.
            His specialty was mechanical training in aircraft engines.
          </p>
        </div>
      </div>
    </>
  );
};

export default Oyama;
