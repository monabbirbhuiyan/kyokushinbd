"use client";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-s2 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white dark:text-white">
          About Us
        </p>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] mt-8"
          )}
          height={10}
          width={10}
        />
      </div>

      <section className="flex items-center justify-center mt-14 mx-22">
        <div>
          <p className="px-20 text-justify mb-7 text-lg">
            At Kyokushin Karate Bangladesh, we embody the values and teachings
            of the International Karate Organization (IKO) and the
            Kyokushinkaikan. Our journey follows the path of Full-Contact
            Karate, a rigorous discipline that strengthens both the body and the
            mind. Through this practice, we aspire to build character, instill
            resilience, and encourage a spirit of humility, ambition, and
            serenity in all our practitioners. &nbsp;
            <br /> <br />
            Our philosophy draws deeply from the teachings of Kyokushin founder,
            Sosai Mas Oyama, who advocated for a balanced life guided by the
            principles of modesty, ambition, and respect. His words, “Keep your
            head low (modesty), eyes high (ambition), mouth shut (serenity),
            while basing yourself on filial piety and benefiting others,”
            resonate at the core of our training. These values serve not only as
            guiding principles within our dojo but also as foundations for
            living meaningfully and contributing positively to society. &nbsp;
            <br /> <br /> Kyokushin Karate Bangladesh stands firmly against
            discrimination and prejudice. We believe that karate transcends
            boundaries, celebrating unity among individuals of all ethnicities,
            races, nationalities, religions, genders, and ages. Our community is
            built on inclusivity and mutual respect, recognizing that every
            individual has the right to train, learn, and grow within a
            supportive environment.&nbsp;
            <br /> <br /> Our ultimate aim extends beyond individual
            development; we aspire to foster bonds of international friendship,
            respect, and understanding through our shared passion for Kyokushin
            Karate. With each practice and every gathering, we strive for a
            world of stronger, more respectful relationships, and a vision of
            lasting peace. Join us in this pursuit, as we cultivate not just
            martial skills but values that shape a better world.
          </p>
        </div>
      </section>

      <div className="flex w-full items-center justify-center mb-5 mt-7">
        <Image
          src={"/assets/about/aboutkanji.jpg"}
          height={20}
          width={1000}
          alt="Kanji"
          className="mt-10 w-[1000px] sm:w-[80%] md:w-[1000px]"
        />
      </div>

      <div className="mt-22 mb-20">
        <p className="px-20 text-justify mb-7 text-2xl text-rose-800 font-semibold mx-22">
          খিউকুশিন কারাতে! জাতি, জাতীয়তা, রাজনীতি, দর্শন, ধর্ম, লিঙ্গ বা বয়সের
          উপর ভিত্তি করে কুসংস্কার প্রচার বা অনুশীলন করে না, বরং স্বীকার করে যে
          প্রত্যেকের সমান অধিকার রয়েছে। খিউকুশিন কারাতের সর্বশ্রেষ্ঠ সাধনা হল
          আন্তর্জাতিক বন্ধুত্ব, সম্মানজনক সম্পর্ক এবং বিশ্ব শান্তির লক্ষ্যে
          পৌঁছানো।
        </p>
      </div>
    </>
  );
};

export default AboutUs;
