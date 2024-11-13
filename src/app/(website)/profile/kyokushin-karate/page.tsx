import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const KyokushinKarate = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Kyokushin
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Karate
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/profile/sosai.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-fill md:object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            KARATE, the fountainhead of the Japanese warrior code and today a
            subject of worldwide interest, is one of Mankind’s most priceless of
            wisdom. Every one prizes the sort of incredible strength the Karate
            master uses to smash wood-board and stone with his bare hands,
            because it is a sort of magic that brings the impossible into the
            realm of possibility. Though the history of Karate is long, its
            power and techniques are forever new. Karate extends back to Man’s
            origins and continues in usefulness to the present.
            <br />
            <br />
            As a means of defense, Karate has a vigor and power that other
            martial arts lack. Conceived from the wisdom and strength that made
            life possible for Man’s ancestors, Karate has fused with modern
            rationality to become a truly miraculous art of self–defense.
            <br />
            <br />
            Karate has been the last stronghold of defense for tens of thousands
            of people; it can be yours too.
          </p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={`/assets/profile/wk.jpg`}
              alt="hero"
              height={1000}
              width={900}
              className="mx-auto rounded-14"
            />
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={`/assets/profile/tk.jpg`}
              alt="hero"
              height={1000}
              width={900}
              className="mx-auto rounded-14"
            />
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={`/assets/profile/ak.jpg`}
              alt="hero"
              height={1000}
              width={900}
              className="mx-auto rounded-14"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            Masutatsu Oyama, a Karate Master standing at the very pinnacle of
            today’s Karate world, makes available to every one the essence of
            his thirty years of Karate study and training. Mas. Oyama poured his
            whole being into writing many books and has included a large number
            of special techniques.
            <br />
            <br />
            Oyama Karate begins and ends with points and circles, in which lie
            the miraculous strength and the life of the system. Through these
            points and circles, a sense of flowing motion calls forth dynamic
            waves and creates great billows of strength. Mas. Oyama, whose
            psychology is based on ZEN and SHINTO, has developed a Karate that
            is serene in movement, refined and stable in form and is the
            authentic method of Kyokushin Karate.
          </p>
        </div>
      </div>
    </>
  );
};

export default KyokushinKarate;
