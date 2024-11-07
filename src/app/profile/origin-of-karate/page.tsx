import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const OriginOfKarate = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                The Origin of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Karate
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/profile/origin.jpg`}
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
            <Image
              src={`/assets/profile/temple1.jpg`}
              alt="hero"
              height={1000}
              width={900}
              className="mx-auto rounded-14 mt-4"
            />
          </div>
          <p className="text-md md:text-lg w-full md:w-2/3">
            Karate arrived from Okinawa about 150 years ago. It was brought to
            Japan by Mr. Funakoshi Gichin, who did much to make it popular. But
            Japan already had a similar art called Jujutsu, which developed from
            Koppo. Koppo became Yawara, Yawara became Jujutsu. Jujutsu was then
            subdivided into three broad categories: Judo, Karate, and Aikido.
            <br />
            <br />
            <span className="font-bold">Karate and Aikido:</span> Judo has
            throwing, strangles and ground holds, and originally was divided
            into 2 systems. 1) Kodokan Judo, originally in throwing, based in
            Tokyo, and 2) Butokukai, based in Kyoto and specializing in ground
            holds. The Butokukai was, however, greatly influenced by the
            Japanese right party and was consequently disbanded by General
            McArthur after the Second World War.
          </p>
        </div>

        {/* Second paragraph */}
        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            Before the war, the Butokukai and Kodokan held a yearly
            inter-competition. This was perhaps the best time in Japanese Judo,
            it grew rapidly and became known overseas.
            <br />
            <br />
            Karate, in its truest sense, originated with man himself. Primitive
            men were forced to defend themselves and their homes from wild
            beasts and from marauding raids from other tribes. To do so, it was
            essential that they device a method of fighting, and each method,
            developing individually in different regions, remains in some form
            or another even today. Karate's historical significance is profound
            particularly in connection with the history of China.
            <br />
            <br />
            From the many fighting methods developed in China's long history,
            Kempo, a system of unarmed combat, is the one from which Karate
            sprang. The kempo system most closely related to Karate is the
            Shao-lin-ssu school, named after a famous Bhuddhist monastery, the
            Shao-lin-ssu on Mt. Hao on the lower reaches of the Yangtze river.
            Bodhidharma, the semi-legendary Buddhist priest who brought Zen
            (Ch`an in Chinese) into China is said to be the founder of the
            monastery.
          </p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 my-8">
          <p className="text-md md:text-lg w-full md:w-2/3">
            This Bodhidharma, (Daruma Daishi in Japanese) is thought to have
            traveled from India to China to teach true Bhuddism to the Chinese
            people. He found support for a while in the court of the scholarly
            and devout Emperor Wu of the kingdom of Lang. Later, however, the
            two men's views of Buddhism proved irreconcilable and the Emperor
            drove Bodhidharma from his kingdom. The Indian priest then moved to
            the Shao-lin-Ssu monastery where he began the teaching of Zen. To
            protect the Shao-lin-Ssu monks from the raids of followers of other
            sects and nonbelievers, Bodhidharma is thought also to have
            instituted a course of rigid physical training.
          </p>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={`/assets/profile/temple2.jpg`}
              alt="hero"
              height={1000}
              width={900}
              className="mx-auto rounded-14"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <p className="text-md md:text-lg">
            The basis of this training was a system of unarmed combat which
            Bodhidharma brought from India. This combat method later developed
            into the famous Chinese Shao-lin-Ssu kempo, which persists in use
            today. Because Shao-lin-ssu kempo evolved from the instruction of
            Bodhidharmi in connection with his ZEN disciplines, we can consider
            it to have originated in India. Kempo then would seem to be over
            three thousand years old. We can readily perceive a similarity
            between Kempo poses and the positions of the figures in some Indian
            murals and statues of great age, as well as in the statues of the
            guardian kings in many Japanese Buddist temples. These kings
            represent figures of great valor who stand ready to protect from
            evil spirits. Their positions, based on those of ancient Indian hand
            to hand combat methods, employ a hand position with all the fingers
            outstretched and a fist with the thumb on the outside and the little
            finger tightly curled in. Though both of these positions are
            somewhat different from those of modern-day Karate, they are very
            close to hand positions used in Chinese Kempo.
            <br />
            <br />
            Kempo, spreading over wide temporal and spatial bounds finally
            entered the Korean peninsula, the Japanese Archipelago, and Mongolia
            to the north where it became Mongolian wrestling. It also traveled
            southward to the Ryukyu Islands, where it fused with a native Ryukyu
            fighting method to become what we know today as Karate, which in
            turn later came to Japan.
            <br />
            <br />
            After its introduction to Japan, Karate fused with the spirit of the
            Japanese martial code to become, in the truest sense, a complete
            blend of physical and spiritual discipline.
          </p>
        </div>
      </div>
    </>
  );
};

export default OriginOfKarate;
