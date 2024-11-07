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
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-7">
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
            to Manchuria, in Southern China, to live on his sister&apos;s farm.
            He had to walk six miles to school over a hill to Yongee Primary
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
            Japan to attend a boys&apos; military academy in Yamanashi
            Prefecture. His specialty was mechanical training in aircraft
            engines.
          </p>
        </div>

        {/* Second paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            The year was 1937. Japan was at war with China and the country was
            steadily being turned into armed camp. He quickly picked up the
            Japanese name, Masutatsu Oyama - better known to his friends as Mas.
            Oyama.
            <br />
            <br />
            While in Yamanashi, he began the study of karate, Shotokan style. He
            was trained in this electrifying martial art introduced into Japan
            from Okinawa. But Oyama was not satisfied with the training. In
            1938, at the age of 15, he traveled to Tokyo to train as an aviator,
            to be like his hero of the time, Korea&apos;s first fighter pilot.
            Survival on his own at that age proved to be more difficult than he
            thought.
            <br />
            <br />
            The young Karate enthusiast enrolled at the dojo of Gichin Funakoshi
            at Takushoku University. Legendary Master Funakoshi, the Father of
            Japanese Karate, taught the Shotokan Style. His training progress
            was such that by the age of seventeen he was already a 2nd Dan, and
            by the time he entered the Japanese Imperial Army at 20, he was a
            fourth Dan. At this point he was also renowned for both his physical
            and spiritual strength. It was he who encouraged Mas Oyama to
            dedicate his life to the Martial Way. At this time, Mas Oyama
            continued his interest in the martial arts by participating in
            Karate and Judo.
            <br />
            <br />
            Mas Oyama studied the Gojukai style of karate and his progress there
            was no less amazing. It was around 1943 that Oyama met the Gojukai
            specialist, So Nei Chu and trained under him. At that time Mas Oyama
            was married to Chiyako.
            <br />
            <br />
            In 1946, when he was 23 years old, Mas Oyama met Eiji Yoshikawa, the
            author of the novel Musashi, which was based on the life and
            exploits of Japan&apos;s most famous Samurai. Both the novel and the
            author helped to teach Mas Oyama about the Samurai Bushido code and
            what it meant. Around this time, he also visited another famous
            author, Shiro Ozaki who further enriched his knowledge of the
            Samurai Way. Soon afterward, he entered the Physical Department of
            Waseda University, Tokyo.
          </p>
        </div>

        {/* Container for image and third paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3">
            That same year, Oyama went to Mt. Kiyosumi in the Chiba Prefecture,
            where Musashi had developed his Nito-Ryu style of sword fighting.
            Oyama thought that this would be an appropriate place to commence
            the rigors of training he had planned for himself. He entered the
            mountain for training, but a few months later he had to return. Not
            long after, Mas Oyama Mount Minobu.
            <br />
            <br />
            In 1947, he became the champion of the All Japan Karate-do
            Tournament. He studied Goju-ryu Karate extensively under Master
            Gogen Yamaguchi, and became Vice Chairman of the organization,
            holding the 9th Dan degree.
            <br />
            <br />
            In 1948, once again Oyama entered the mountain alone for training.
            Month after month passed by while he followed a strict daily routine
            of practicing karate. It was during this time that he made a form of
            kyokushin and he worked out his original breaking techniques. A year
            slipped away and still Oyama remained on Mount Minobu, living and
            training like the Yamabushi (warrior monk) of ancient Japan. After
            18 months, he came down from Mt Minobu.
            <br />
            <br />
            In 1950, he began his training against the live bulls, acquiring a
            room in a butcher&apos;s establishment. Around that time, he had
            developed huge calluses on his fist knuckles. Mas Oyama went to the
            cattle ranch every day, observing the bulls, watching them get
            killed with a hammer. He could break 30 pieces of tiles with his
            fist at a single stroke, but so could a hammer. A hammer could also
            kill a bull, so why not Mas Oyama? There have been reports that Mas
            Oyama has killed 53 bulls among which 4 dying instantly.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama3.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* 4th paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            In 1952, he visited America for Karate instructions and
            demonstrations in 32 locations and had 7 real matches.
            <br />
            <br />
            In 1953, he revisited America, and fought against a bull in Chicago,
            where he broke its horn by Shuto strike (knife hand).
            <br />
            <br />
            In 1954, Mas Oyama decided to go on a three-month karate tour of
            Southeast Asia. In this tour, he accepted a challenge fight from the
            top welter weight famous Kick boxer Black Chopra, needless to say,
            Oyama won the bout. He returned to Japan to under-go 3 months
            training for a movie in Boso, Chiba. In the same year, he opened his
            first dojo in a burned out area in Mejiro, Tokyo. The instructors
            were K. Mizushima and E. Yasuda.
            <br />
            <br />
            In 1955, he went all around South America and Europe with Bedford
            Day, President of Chrysler Corp. There he fought numerous mixed
            matches.
            <br />
            <br />
            In 1956, he started a small Oyama Dojo at an old ballet school
            behind Rikko University.
          </p>
        </div>

        {/* Container for image and 5th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama4.jpg"
                    height="200"
                    width="200"
                    className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-20">
            In 1957, Mas Oyama travelled to the most northern island of
            Hokkaido. He even challenged fighting a bear during his stay there.
            It is also the year in which Mas Oyama completed his first Karate
            book &apos;What is Karate&apos;.
            <br />
            <br />
            In January 1958, he published "What is Karate" which became a
            bestseller with 500,000 copies sold. Mas Oyama went back to the
            States in 1959, giving exhibitions teaching and opening &apos;School
            of Oyama&apos; dojos in Chicago, Los Angeles, San Francisco. In this
            year, he accepted the invitation from the FBI in Washington D.C. for
            Karate instructions and demonstrations. In the same year, he was
            also invited by West Point Military Academy for Karate instructions
            and demonstrations.
          </p>
        </div>

        {/* Container for image and 6th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-7">
            In 1960, Mas Oyama brought out a larger edition of &apos;What is
            Karate&apos;.
            <br />
            <br />
            In 1961, he changed the named "school of Oyama" to "Kyokushinkai."
            In 1961 it wasn&apos;t until
            <br />
            <br />
            In 1962, Mas Oyama went to Europe and USA to study many kinds of
            fighting and to demonstrate karate. In the same year, the 4th Hawaii
            Tournament was held.
            <br />
            <br />
            In 1963, he built his four-storey Honbu Dojo near the old one in
            Ikebukuro directly behind the Hiratsuka Hospital.
            <br />
            <br />
            In 1964, Muai Thai Kick Boxing challenged Japanese Karate, but this
            challenge was not accepted by the Japanese Karate Federation. At
            this time, Mas. Oyama&apos;s Karate School (dojo) accepted this
            challenged and sent three student to Thailand. There they won 2
            fights and redeemed the name of Japanese Karate.
            <br />
            <br />
            E. Sato (Former Prime Minister of Japan) who had recently won a
            Nobel Prize, became the President of the Kyokushinkai Karate
            Organization, and Mas. Oyama became (Kancho) Director. International
            Karate Organization (I.K.O.) Headquarter (Honbu) was officially
            opened, and established. The Georgia State University invited Mas.
            Oyama to teach Karate.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama5.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* 7th paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            In 1965, the first Winter Training Camp was held at Mount Mitsumine.
            The Book “This is Karate” was published and became known as the
            Bible of Karate. 3,000 pages of preparation notes and 20,000 photos
            were used for this publication. S. Arneil of Britain achieved the
            100 men fight (kumite), the first student of Kyokushin Karate to do
            so.
            <br />
            <br />
            In 1966, K. Kurosaki was sent to Europe to teach Karate. The Book
            “Dynamic Karate” and Modern Karate were Published. Segero Oyama was
            sent to USA to teach Karate. The USA I.K.O. was founded in the same
            year. Sean Connery of 007 fame came to Japan and received Kyokushin
            Karate lessons from Mas. Oyama. Segero Oyama achieved the 100 Men
            Fight (Kumite).
            <br />
            <br />
            In 1967, K Kato was sent to Australia to teach Karate. Loek
            Hollander of Holland achieved 100 Men Fight (Kumite). The Book “
            Vital Karate “ was published.
            <br />
            <br />
            In 1968, S. Ogura was sent to Brazil to teach Karate. The story book
            “Fighting Travel Around the World” was published. The European
            I.K.O. was founded and the Middle East I.K.O. was started. Mas.
            Oyama gave private lessons to His Majesty the King of Jordan. The
            South Pacific I.K.O. was founded.
            <br />
            <br />
            In 1969, the movie “Boys&apos; Karate," “Karate for the Millions”
            and “Young Man’s Karate Self-defense" were released. The South
            African and the South East Asian IKO were started. Y. Matsushima
            went to South East Asia to teach Karate. The 1st All Japan Open
            Karate Tournament was held in Tokyo which attracted Kick Boxing,
            Judo-Ka, Kareta-ka from other styles and a large audience.
          </p>
        </div>

        {/* Container for image and 8th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-10">
            In 1970, “Karate Class" and “Advanced Karate" were published.
            <br />
            <br />
            In 1971, “For People who Start Karate" was published. The USA Main
            Branch was established in Manhattan, New York. N. Kishi was sent to
            the US to teach Karate.
            <br />
            <br />
            In 1972, “Fighting Spirit” was published. Seiji Isobe was sent to
            Brazil to teach Karate. Y. Oyama went to the US to teach Karate. The
            Movie “Kenka Karate" was released.
            <br />
            <br />
            In 1973, Mas. Oyama visited many branches throughout the world in
            connection with staging the World Karate Tournament 2 years later.
            Miyuki Miura achieved the 100 men fight (Kumite). The Movie “My
            Karate Life” was released.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama6.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 9th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/wt1.jpg"
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
            In 1974, Mas. Oyama demonstrated for Prince Sharam of Iran and
            awarded the Prince Hon. 2nd Dan.
            <br />
            <br />
            In 1975, The First World Open Karate Tournament was held in Tokyo.
            128 competitors attended from 36 countries. “My Karate Gorin-no-sho”
            was published.
            <br />
            <br />
            In 1976, “Karate All Round the World" was published. The First World
            Tournament movie “The Strongest Karate” was released. “The Way of
            Kyokushin” was publisheed and “The Strongest Karate – part 2" was
            released.
            <br />
            <br />
            In 1977, “Challenge to the Limits” was published. The English
            quarterly magazine “Kyokush Karate” started. The Japanese monthly
            magazine “Power Karate" started.
            <br />
            <br />
            In 1978, “The Godhand" comic strip started. Mas. Oyama went to Hong
            Kong and he gave a grand and important speech in the ancient capital
            of Nara, Japan. The first European Karate Tournament as held in
            London. The Malaysian Open Karate Tournament was held.
          </p>
        </div>

        {/* Container for image and 10th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3">
            In 1979, The 2nd World Open Karate Tournament was held in Nippon
            Budokan indoor stadium, where 62 countries participated and 32,000
            spectators followed the event over three days.
            <br />
            <br />
            In 1980, the book “The Last Strongest Karate" concerning the 2nd
            World open Karate Tournament was released. The Second L.P. “The
            Essence of Kyokushin Karate -- Mas. Oyama`s Philosophy" was released
            under the label of King Records.
            <br />
            <br />
            In 1981, The 1st Asia Open Karate Tournament was held in Jakarta,
            Indonesia.
            <br />
            <br />
            In 1982, following requests from Hong Kong Mr. Mizuguchi and Mr.
            Oga, under the leadership of Shihan Goda gave a Karate exhibition.
            TBS broadcasted the Kyokushin Karate demonstration. Singapore
            Kyokushin Karate Branch arranged a karate demonstration, held in the
            FAFRA Gardens of the Singapore Army.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/wt2.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* 11th paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            In 1983, a welcoming Karate demonstration was held for the France
            Navy’s crew of Jean D` Arc. The first Sri Lanka Karate Championships
            was held. 3,000 people attended a party to celebrate 20 years of
            Kyokushin Karate and the 35th Wedding ceremony of Sosai Mas. Oyama
            and Mrs. Oyama. In this year&apos;s December, “My Karate Budo
            Education" and “Showa Gorin-no-sho“ were published.
          </p>
        </div>

        {/* Container for image and 12th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-10">
            In 1984, the 3rd World Karate Tournament was held at Nippon Bodokan
            from 20th to 23rd Jan.
            <br />
            <br />
            In 1985, the movie “The Kyokushin Way" was released by Shochiku Fuji
            Co. The 17th All Japan Karate Tournament was held at Tokyo, with the
            champion being Akiyoshi Matsui. The book “Kuken-Shikon" was
            published in the same year.
            <br />
            <br />
            In 1986 June, Akiyoshi Matsui currently the Kancho (Director) of
            IKO, succeeded in completing the one hundred man Fight (Kumite) at
            Daiei Oizumi Studio in Nerima, Tokyo. He is the 3rd man to achieve
            this in the history of Kyokushin. The 18th All Japan Karate
            Tournament was held at Yoyogi National Stadium, Champion – Akiyoshi
            Matsui.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/wt3.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 13th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/wt4.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3 mt-16">
            In 1987 November, The 4th World Open Karate Tournament was held at
            Nippon Budokan, Tokyo, from 6th to 8th, the Champion being Akiyoshi
            Matsui.
            <br />
            <br />
            In 1990 April, The 4th All Asia Karate Tournament was held at
            Hokkaido, Japan, Champion – Abei from Japan.
            <br />
            <br />
            In 1991 November, The 5th World Open Karate Tournament was held at
            Tokyo Metropolitan Gymnasium, Tokyo, from 6th to 8th, the Champion –
            Midori Kenji.
            <br />
            <br />
            In 1992 Jun, The 5th All Asia Karate Tournament was held at Sri
            Lanka, Champion – Rupesh Dangol from Nepal. On July 1st, The
            Commonwealth Kyokushin Karate Tournament was held at Singapore,
            Sosai Mas Oyama was present at the event.
          </p>
        </div>

        {/* Container for image and 14th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3 md:mt-10">
            In 1994 April 23rd and 24th, the 6th All Asia Open Karate Tournament
            was held in Kathmandu, Nepal. Akiyoshi Matsui, Keiji Sampei and
            Shihan Goda attended the Tournament but unfortunately, due to
            illness, Sosai Mas. Oyama could not travel to Nepal. On the morning
            of April 26 at 8.30 am a heartbreaking event took place for every
            Kyokushin Karateka around the world.
            <br />
            <br />
            <span className="text-rose-800 font-bold text-2xl">
              The Karate Godhand, Grand Master, Sosai Mas. Oyama Passed Away{" "}
            </span>
            <br />
            <br />
            <span className="text-blue-600 font-medium">
              After Sosai Mas.Oyama`s death, Shokei Akiyoshi Matsui, became the
              Director of the International Karate Organization (IKO) Kyokushin
              kaikan, appointed by Sosai Mas. Oyama.
            </span>
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/oyama7.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* Container for image and 15th paragraph */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 my-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <p className="text-md md:text-lg text-center font-bold text-emerald-600">
              Late Sosai Mas Oyama&apos;s Dogi (Dress) and Belt
            </p>
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/sosaidogi.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          <div className="w-full md:w-1/3 flex-shrink-0">
            <p className="text-md md:text-lg text-center font-bold text-emerald-600">
              Sosai Mas. Oyama&apos;s Memorial
            </p>
            <CardContainer className="inter-var max-w-xs sm:max-w-sm lg:max-w-md ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/assets/profile/sosaimemo.jpg"
                    height="500"
                    width="500"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sosai Oyama"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oyama;
