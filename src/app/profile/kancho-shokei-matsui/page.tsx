import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const Kancho = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                IKO Kyokushinkai President
                <br />
                <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                  Kancho Shokei Matsui
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/profile/kancho1.jpg`}
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
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/kancho2.jpg"
                  height="500"
                  width="500"
                  className="h-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kancho Shokei Matsui"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5 ">
            Kancho Shokei (Akiyoshi) Matsui was born in 1963. In 1976, he joined
            the Kita Nagare-Yama Dojo in the Chiba prefecture of Japan and
            commenced his illustrious karate career at the age of 13. He quickly
            established a firm reputation for being a karate man of exceptional
            skill and ability, with a highly individual, technically superior
            style of fighting. He took the basics he learnt in the dojo, and
            through intense and dedicated training, he made these techniques
            work for him, managing to achieve Shodan (first degree) Black Belt
            in a little over a year.
            <br />
            <br />
            In 1980, Matsui placed fourth in the 12th All Japan Open Karate
            Championships when he was just 17. Soon after, he became Chief
            Instructor of the International Kyokushin Headquarters "Honbu" Dojo
            in Tokyo, Japan. Both in 1981 and 1982, Matsui took 3rd Place in the
            All Japan Open Karate Championships and then 8th place at the same
            event in 1983.
          </p>
        </div>

        {/* Container for image and 2nd paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            He earned worldwide recognition and admiration for his amazing
            spirit, strength, and determination when he took a remarkable Third
            place finish at the 3rd World Open Karate Tournament in 1984. He
            succeeded in winning the All Japan Championships in each of 1985 and
            1986, and then successfully completed the ultimate Kyokushin
            challenge, the "100 Man Kumite" in record time. In Japan, students
            around the world continue to try and capture some of the essence of
            Kancho&apos;s style of fighting in their own training. Sosai Mas
            Oyama used to call him "a true champion"; he became known as the man
            of "unparalleled genius", one who comes along but once in an eon,
            and then in 1987 became the youngest ever Champion of the World at
            the age of 24. In May of 1992, Matsui opened his own Karate Dojo
            (School) in Asakusa, Tokyo and was later appointed Branch Chief by
            Sosai Mas Oyama.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/wt4.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kancho Shokei Matsui at World Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* 3rd paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            On April 26, 1994, founder Sosai Mas Oyama regrettably passed away,
            leaving the Directorship of the worldwide organization to Matsui,
            who became "Kancho" (Director). In the wake of the Sosai&apos;s
            untimely death, and despite the well-documented backlash concerning
            his appointment, Kancho Matsui forged ahead that year staging the
            11th All Japan Weight Tournament and the 27th All Japan
            Championships, the latter with a record 16,000 spectators in
            attendance. The following year, he produced the hugely successful,
            6th World Open Karate Tournament, to which 168 fighters from all
            over the world competed and more than 25,000 spectators witnessed.
          </p>
        </div>

        {/* Container for image and 4th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/kancho3.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kancho Matsui Ice Breaking"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5 ">
            Kancho Shokei Matsui has planned, produced and presented numerous
            groundbreaking martial arts events to the world, including
            inaugurating the "World Cup"-Team Karate Championships, the
            "Women&apos;s World Karate Championships", the "World Weight
            Category Karate Championships", the "International Senior Karate
            Championships", the "International Kata Championships" and the
            "International Youth Karate Championships", to which nearly 2,000
            competitors aged 4-17 from around the world participated. These
            events are in addition to continuing the grand legacy Mas Oyama
            began by presenting the once-every-four-year, World Open Karate
            Tournament, an event that has grown to become the largest, most
            revered and renowned martial arts competition the world has ever
            seen.
          </p>
        </div>

        {/* 5th paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            Ultimately, the stature of the man is confirmed in his designation
            as Sosai Oyama&apos; successor in Sosai&apos;s last will, and he now
            heads arguably the largest karate organization in the world.
            Currently, the International Karate Organization has over 15 million
            members in 167 countries. While simultaneously managing the
            organization from its headquarters in Japan, Kancho Matsui travels
            to Branches around the globe to teach and spread the spirit of the
            Kyokushin Way to countries and cultures everywhere.
          </p>
        </div>
      </div>
    </>
  );
};

export default Kancho;
