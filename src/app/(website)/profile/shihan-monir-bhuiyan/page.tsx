import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const ShihanMonir = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                IKO Kyokushinkai Bangladesh Branch Chief
                <br />
                <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                  Shihan Monir Bhuiyan
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/profile/shihan/shihan1.jpg`}
            alt="hero"
            height={720}
            width={1100}
            className="mx-auto rounded-2xl object-fill md:object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        {/* Container for image and first paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-lg ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan2.jpg"
                  height="600"
                  width="600"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir Bhuiyan"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            To illustrate the history of International Karate Organization (IKO)
            Kyokushinkai Bangladesh branch, it is essential and important to
            write down details about the Bangladesh Branch Chief, Shihan Monir
            Ahmed Bhuiyan (Black Belt 5th Dan from Japan). He officially opened
            the IKO Bangladesh Branch on 21st October 1991 in Dhaka, Bangladesh.
            However, Shihan Monir Ahmed Bhuiyan had started Martial Arts from
            1978 and traveled a long and hard way to arrive at today’s
            destination. Therefore Kyokushin Karate was officially established
            in Bangladesh by none other than Shihan Monir Ahmed Bhuiyan, who was
            born in Dhaka on 30th September 1961.
            <br />
            <br />
            <span className="font-bold">1978:</span> This may not be an
            important year to a historian, but around this time, a young Monir
            Ahmed Bhuiyan dreamed of becoming a great martial artist. He began
            his journey in martial arts (Judo) at the Bangladesh Judo and Karate
            Federation in 1978 under Mr. Awlad Hossain when he was 17 years old.
            At the end of this year, he received his brown belt. At around the
            same time, he also started training in Bando Karate under Mr. Badol
            in the Bangladesh Judo & Karate Federation. In December, he joined
            the Bangladesh Dragon Karate Center and started Bando Karate under
            Sensei Rafiqul Islam Newton.
            <br />
            <br />
          </p>
        </div>

        {/* Container 2nd paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">1980:</span> Sensei Rafiqul Islam Newton
            appointed him as an instructor of Bangladesh Dragon Karate
            Association Headquarters.
            <br />
            <br />
            <span className="font-bold">1981:</span> Monir participated in the
            1st all Bangladesh Dragon Karate Tournament and won the Group
            Championship. Sensei Rafiqul Islam Newton awarded him the Brown
            Belt.
          </p>
        </div>

        {/* Container for image and 3rd paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">1982:</span> Monir came across an
            opportunity; he had a chance meeting with a Japanese Karate teacher
            Mr. Shigero Takahashi (Goju Ryu Karate) in Dhaka, Bangladesh.
            <br />
            <br />
            <span className="font-bold">1984:</span> Sensei Takahashi honored
            Monir with the Black Belt. In April of the same year Sensei
            Takahashi returned to Japan.
            <br />
            <br />
            <span className="font-bold">1985:</span>​ Monir did not derail from
            his one true aim. Once again he joined the National Sports Council
            Bangladesh Judo and Karate Federation for Shotokan-to-Wadoryu Karate
            under Sensei Titsuro Kitamura (from Japan). He received his brown
            belt after 8th months of training.
            <br />
            <br />
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan3.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Takahashi Sensei"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container 4th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            Through Sensei Shigero Takahashi&apos;s assistance, near the end of
            the year, Monir received a unique opportunity to travel to Japan.
            Subsequently, he was introduced to the world renowned Karate
            organization, the Kyokushin Budo Karate Organization Headquarter in
            Tokyo, Japan. Soon afterward, Monir received his first lesson at IKO
            Honbu (headquarter) from Shokei Akiyoshi Matsui, who was one of the
            instructors at Honbu at the time.
          </p>
        </div>

        {/* Container for image and 5th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan4.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir in Honbu"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">1986:</span> As a thirsty young
            karateka, Monir continued his training under the founder of
            Kyokushin Karate, Sosai Mas. Oyama. Over the next few months, Monir
            had the opportunity to train directly under Sosai Mas. Oyama, Sensei
            Shokei A. Matsui, Sensei Nakamura, Sensei Akimoto, Sensei Kitamoto
            and many others at the IKO. Honbu Kyokushinkaikan.
            <br />
            <br />
            <span className="font-bold">1987:</span> Monir Bhuiyan was appointed
            as an official at the 4th World Karate Tournament, the same
            tournament in which Shokei Akiyoshi Matsui became Champion.
          </p>
        </div>

        {/* Container for image and 6th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">1989:</span> March, as a dreamy young
            man, Monir&apos;s long awaited dream came true, he received his
            Black Belt 1st DAN. He participated in the Nakano ken open
            full-contact Karate Tournament and took 3rd Place. He also
            participated in the Japan UV open full-contact Karate tournament and
            became champion. Along with many other tournaments, he participated
            in the Osaka weight category full-contact karate Tournament as well.
            In December of the same year, Monir Bhuiyan participated in the 21st
            All Japan Open Full-Contact Karate Tournament.
            <br />
            <br />
            <span className="font-bold">1990:</span> March, Monir Ahmed Bhuiyan
            upon receiving his Black Belt 2nd Dan, realized his dream of
            devoting his life to karate. He soon participated in the 4th All
            Asia Open Full-Contact Karate Tournament in Sapporo, Hokkaido,
            Japan. Several newspapers published his interview with photographs
            after the event.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan5.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Kancho"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 7th paragraph */}
        <div className="mx-auto flex flex-col md:flex-row items-start justify-between gap-6 my-8">
          {/* Apply a fixed width and height for uniformity */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan6.jpg"
                  height="300"
                  width="300"
                  className="w-full h-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir at World Tournamnet"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/4 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan7.jpg"
                  height="300"
                  width="300"
                  className="w-full h-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir in Japanese Magazine"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/6 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan8.jpg"
                  height="300"
                  width="300"
                  className="w-full h-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir in Japanese Magazine"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/4 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan9.jpg"
                  height="300"
                  width="300"
                  className="w-full h-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir in Japanese Magazine"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 8th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan10.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Sosai Oyama"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            It was in this year that Sosai Mas. Oyama appointed him as a Branch
            Chief for Bangladesh. Near the end of the same year, Sensei Monir
            returned to Dhaka, Bangladesh. He may have returned to his home
            country, but in his heart he held fond memories of his bouts back in
            Japan with the world&apos;s best fighters such as Kenji Midori (5th
            World Champion, 1991), Shokei Akiyoshi Matsui (4th World Champion,
            1987), Shishino Ue (Heavy-weight Champion, 1988), Uoe Sempai, Tamura
            Sempai and many other top fighters from the Honbu at the time. ​
            <br />
            <br />
            <span className="font-bold">1991:</span> 21st October, the day that
            will forever remain memorable for every Bangladeshi -- Kyokushin
            Karate (IKO) Bangladesh Branch Chief, Sensei Monir Ahmed Bhuiyan
            officially declared and opened the Kyokushin Karate IKO Bangladesh
            Branch at the National Sports Council Gymnasium Hall, Purana Paltan,
            Dhaka.
            <br />
            <br />
          </p>
        </div>

        {/* Container 9th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">1992:</span> IKO Bangladesh Branch
            participated in the 5th All Asia Open Full Contact Karate Tournament
            in Sri Lanka. This was the last time that Sensei Monir had a chance
            to meet with Sosai Mas. Oyama. It was in the same year that Sensei
            Monir was invited from the Bangladesh Television magazine program
            &quot;Ityadi.&quot; This event was a turning point for the history
            of Bangladeshi Martial Arts.
          </p>
        </div>

        {/* Container for image and 10th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">1993:</span> Sensei Monir was once again
            invited from the Bangladesh Television magazine program (Antaranga).
            During the program, Sensei Monir and his students displayed a
            beautiful demonstration. In the same episode that day, Sensei Monir
            broke a 1.5kg natural stone with his bare hand.
            <br />
            <br />
            <span className="font-bold">1996:</span> June, the 1st Black Belt
            Test was held in Dhaka, Bangladesh. Shihan Peter Chong (IKO South
            East Asia Chairman) from Singapore came to Bangladesh as a chief
            examiner, while Bangladesh Branch Chief, Monir Ahmed Bhuiyan was the
            official examiner. 15 students from IKO Bangladesh participated in
            this test.
            <br />
            <br />
            <span className="font-bold">1998:</span>​ Branch Chief Sensei Monir
            Ahmed Bhuiyan recieved an invitation from Bangladesh Television
            (BTV). It was for a Kyokushin Karate instructional show in the BTV’s
            &quot;Krirajagat&quot; program broadcasted every Friday for a year.
            <br />
            <br />
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan11.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir Stone Breacking"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container 11th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">1999:</span> Branch Chief Sensei Monir
            Ahmed Bhuiyan participated in the 7th World Open Full Contact Karate
            Tournament in Tokyo, Japan, where he fought up to the 2nd Round. It
            was in this year that he also participated in the Mitsumine Dan
            (Black Belt) Promotion Test and achieved his Black Belt 3rd Dan.
          </p>
        </div>

        {/* Container for image and 12th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">2000:</span> The 1st All Bangladesh Open
            Breaking and Kata Tournament was held at the National Sports Council
            Gymnasium Hall.
            <br />
            <br />
            <span className="font-bold">2003:</span> Branch Chief Sensei
            Monir&apos;s dream was successful as The 1st All Bangladesh Open
            Full Contact Karate Tournament was held on 12th September in the
            Dhaka University Gymnasium Hall. The Chief Guest was Matsushiro
            Horiguchi (Hon&apos;ble Ambassador, Embassy of Japan, Dhaka). In the
            same year, one Bangladesh Branch student participated in the 8th
            World Open Full Contact Karate Tournament in Tokyo, Japan. Sensei
            Monir participated in the Mitsumine Dan (Black Belt) Promotion Test
            and achieved his Black Belt 4th Dan.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/shihan12.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Japan Ambassador"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 13th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/saarc.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="1st Saarc Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">2005:</span> The year is memorable for
            Bangladesh Branch Chief Sensei Monir Ahmed Bhuiyan as he organized
            the first ever International Karate Tournament in Bangladesh, which
            also grabbed the attention of the International Karate Organization
            (IKO) Kyokushinkai kan Honbu, along with the rest of the Kyokushin
            world. He entitled it The 1st SAARC Country Open Full Contact Karate
            Tournament, which was held on 18th November 2005, in Dhaka,
            Bangladesh.
            <br />
            <br />
          </p>
        </div>

        {/* Container 14th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">2007:</span> Branch Chief Sensei Monir
            participated in the 9th World Karate Tournament as a Judge, soon
            after which he participated in the Mitsumine Dan Promotion Test for
            his 5th Dan. One Bangladesh Branch student also participated in the
            same World Tournament.
            <br />
            <br />
            <span className="font-bold">2008:</span> The 2nd All Bangladesh Open
            Full Contact Karate Tournament along with The 1st Kids&apos; Karate
            Tournament was held on 9th May. On the occasion, Bangladesh Branch
            published a beautiful Souvenir Magazine while several newspapers and
            a TV Channel, Channel i, covered the program. The 6th Black Belt
            Test was held this year. The branch also participated in The 11th
            Asia Open Karate Championship held on 25th October in Singapore.
            <br />
            <br />
            <span className="font-bold">2009:</span> The 7th Black Belt Test was
            held. The following Black Belt giving ceremony was held at the
            National B.B Stadium where the Honorable Foreign Minister, Dr. Dipu
            Moni was present as the Chief Guest. In the event, beautiful
            demonstrations were given by the Black Belt students of Bangladesh
            Branch.
            <br />
            <br />
            <span className="font-bold">2010:</span> The 3rd All Bangladesh
            Breaking and Kata Tournament was held on 15th May. On the occasion,
            the branch published a beautiful Souvenir Magazine. Several
            newspapers and a TV Channel, ATN Bangla, covered the program.
          </p>
        </div>

        {/* Container for image and 15th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">2013:</span> After numerous
            achievements, Sensei Monir organized the 3rd SAARC Country Open
            Karate Tournament in Dhaka on December. Hasanul Haq Inu, MP.
            Honorable Information Minister of the Govt. of Bangladesh, was
            present as the Chief Guest in this Tournament. Shihan Katsuhito
            Gorai (IKO Director) came to Bangladesh for the first time during
            this event, which was followed by The 1st International Training
            Seminar held at the Shaheed Suhrawardy Indoor Stadium, Mirpur,
            Dhaka.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/saarc2.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="3rd Saarc Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 16th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/int1.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="1st International Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            <span className="font-bold">2015:</span> TAfter a number successful
            events, The 1st International Open Full Contact Karate Tournament
            was held on October in Dhaka. Shihan Katsuhito Gorai (IKO Director)
            came to Bangladesh for the second time for the event. Dr. Shirin
            Sharmin Chowdhury, MP. Honorable Speaker (National Parliament of the
            Govt. of Bangladesh) was present as the Chief Guest in the
            Tournament.
            <br />
            <br />
            ​The tournament was followed by The 2nd International Training
            Seminar conducted by Shihan Gorai at the Shaheed Suhrawardy Indoor
            Stadium, Mirpur, Dhaka.
          </p>
        </div>

        {/* Container 17th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">2016:</span> The 25th Anniversary Award
            program, one of Sensei Monir&apos;s biggest dreams, was successfully
            completed on 11th December with explosive Karate demonstrations. As
            part of his demonstration for the event, Sensei Monir broke a glass
            bottle neck with his bare hand. Shihan Khatsuhito Gorai (IKO
            Director) came to Bangladesh once again to attend this 25th
            Anniversary of IKO Bangladesh Branch celebration program. The event
            was also graced by Dr. Shri Biren Sikder, Honorable State Minister,
            Ministry of Youth & Sports, People&apos;s Republic of Bangladesh and
            Dr Dipu Moni, MP Former Foreign Minister.
          </p>
        </div>

        {/* Container for image and 18th paragraph */}
        <div className="container flex flex-col md:flex-row items-start justify-between gap-2 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <p className="text-md md:text-lg w-full text-center font-bold">
              25th Anniversary Award Program
            </p>
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/int2.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="25th Anniversary"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-1">
            <p className="text-md md:text-lg w-full text-center font-bold">
              2nd Int. Open Karate Tournament
            </p>
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/int3.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="2nd International Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>

          <div className="w-full md:w-1/3 flex-shrink-1">
            <p className="text-md md:text-lg w-full text-center font-bold">
              3rd Int. Training Seminar
            </p>
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/int4.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="International Seminar"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 19th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:pt-5">
            The 2nd International Open Karate Tournament was held on 9th
            December in Dhaka, Bangladesh. Bangladesh (Shahariyjjaman Sumon)
            achieve 2nd place, in which Mr. Annisul Huq, Honorable Mayor, Dhaka
            North City Corporation, was present as the Chief Guest. Sheikh
            Hasina Wazed, Honorable Prime Minister, Govt. of the people&apos;s
            republic of Bangladesh presented a message for this event which was
            published in the Event Magazine. Following this, The 3rd
            International Training Seminar was held on 10th December and was
            once again conducted by Shihan Katsuhito Gorai.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/int5.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="2nd International Tournament 2nd Place Bangladesh"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container 20th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">2018:</span> April, Sensei Monir Bhuiyan
            traveled to Kuwait with his two students to participate in the 2nd
            Asia Middle East Weight Category Championship. Mathew Ricky achieved
            4th place in the light weight category. Afterwards, Sensei Monir
            traveled to Japan with two other students, Mohiuddin Ahmed and Ahsan
            Habib to participate in the IFT Championship 2018. Furthermore,
            Kancho Shokei Matsui received the Award for the 25th Anniversary
            2016 of IKO Bangladesh Branch.
          </p>
        </div>

        {/* Container for image and 21st paragraph */}
        <div className="container flex flex-col md:flex-row items-start justify-between gap-2 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/q1.jpg"
                  height="500"
                  width="500"
                  className="h-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kuwait Tournament"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/6 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              {/*  */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift1.jpg"
                  height="300"
                  width="300"
                  className="h-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Kancho"
                />
              </CardItem>
              {/*  */}
            </CardContainer>
          </div>

          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift2.jpg"
                  height="500"
                  width="500"
                  className="h-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="IFT Japan"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container 22nd paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            Participated in the Mt. Mitsumine International Training Camp and
            visited the late Sosai Mas. Oyama Memorial with respect and love.
          </p>
        </div>

        {/* Container for image and 23rd paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-4 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift3.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir at memorial with Team"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              {/*  */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift4.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir at Camp with team"
                />
              </CardItem>
              {/*  */}
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 24th paragraph */}
        <div className="container flex flex-col md:flex-row items-start justify-between gap-5 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift5.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir in Daikanyama Dojo"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              {/*  */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift6.jpg"
                  height="300"
                  width="300"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir 5th Dan Test"
                />
              </CardItem>
              {/*  */}
            </CardContainer>
          </div>

          <div className="w-full md:w-1/5 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift7.jpg"
                  height="500"
                  width="500"
                  className="h-[200] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Shihan Gorai"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/5 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/ift8.jpg"
                  height="500"
                  width="500"
                  className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir 5th Dan Test"
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>

        {/* Container 25th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            This year in April, Sensei Monir participed in the Special Training
            Seminar in Daikanyama Dojo, Shibuya, Tokyo where he attained the 5th
            Dan (5th degree Black Belt) and received the title of Shihan from
            Sensei.
            <br />
            <br />
            This is a another dream comes true and a point of history that IKO
            Bangladesh Branch Organized the 17th All Asia Open Full-Contact
            Karate Championship 2018 Dhaka Bangladesh on 9th & 10th November. It
            is a Selection for the 12th World Karate Tournament Tokyo, Japan on
            22 - 24 November 2019 and it&apos;s Included Middle East Kyokushin
            Organization.
          </p>
        </div>

        {/* Container for image and 26th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-10 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/asia1.jpg"
                  height="500"
                  width="500"
                  className="h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="All Asia 2018"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              {/*  */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/asia2.jpg"
                  height="260"
                  width="260"
                  className="h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="All Asia 2018"
                />
              </CardItem>
              {/*  */}
            </CardContainer>
          </div>
        </div>

        {/* Container 27th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            This is important to mentioned here that His Excellency Mr. Md.
            Abdul Hamid Hon&apos;able President of People&apos;s Republic of
            Bangladesh decelerated opened the Championship 2018 Dhaka. And
            Shihan Monir Ahmed Bhuiyan Received Crest from the President.
            <br />
            <br />
          </p>
        </div>

        {/* Container 28th paragraph */}
        <div className="container mx-auto ">
          <p className="text-md md:text-lg w-full">
            <span className="font-bold">2019:</span> In the event of the 12th
            World Open Karate Championship, 22-24 November 2019 Tokyo Japan.
            Shihan Monir Bhuiyan&apos;s Daughter, Rubaiya Mehek, participated in
            the 12th World Women Open Karate Championship, and his Son, Monabbir
            Ahmed Bhuiyan achieved 3rd place (Bronze Medal) under 18 categories
            of the World Elite Karate Championship 2019, an outstanding
            achievement for Bangladesh.
          </p>
        </div>

        {/* Container for image and 29th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-10 my-4">
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/wt1.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Monabbir Bhuiyan"
                />
              </CardItem>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-1">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              {/*  */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assets/profile/shihan/wt2.jpg"
                  height="500"
                  width="500"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shihan Monir with Rubaiya Mehek"
                />
              </CardItem>
              {/*  */}
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShihanMonir;
