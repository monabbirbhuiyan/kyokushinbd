import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#000000] bg-footerImg bg-cover pt-4">
      <div className="hidden z-10 md:flex container mx-auto w-full justify-center items-start py-10">
        {/* Socials Section */}
        <div>
          <h2 className="text-2xl font-bold text-rose-600">Socials</h2>
          <div className="flex gap-x-3 pt-5">
            <Link
              href="https://www.facebook.com/profile.php?id=100064361185561"
              passHref
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook className="text-rose-600 text-3xl" />
            </Link>
            <Link
              href="https://www.youtube.com/@KyokushinBangladeshHQ"
              passHref
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube className="text-rose-600 text-3xl" />
            </Link>
            <Link href="" passHref rel="noopener noreferrer" target="_blank">
              <FaInstagram className="text-rose-600 text-3xl" />
            </Link>
            <Link href="" passHref rel="noopener noreferrer" target="_blank">
              <FaTiktok className="text-rose-600 text-3xl" />
            </Link>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex w-full items-center justify-center">
          <Image
            src="/assets/kankubd.png" // Replace with the path to your logo image
            alt="Kanku"
            width={150} // Adjust the width as needed
            height={150} // Adjust the height as needed
            className="mx-auto"
          />
        </div>

        {/* Global Links Section */}
        <div>
          <h2 className="text-2xl font-bold text-rose-600">Global Links</h2>
          <div className="flex flex-col pt-5 gap-y-3 ">
            <Link
              href={"http://www.kyokushinkaikan.org/en/"}
              passHref
              rel="noopener noreferrer"
              target="_blank"
              className="text-white hover:text-rose-500 "
            >
              - IKO Kyokushinkaikan
            </Link>
            <Link
              href={"https://www.facebook.com/I.K.O.Kyokushinkaikan"}
              passHref
              rel="noopener noreferrer"
              target="_blank"
              className="text-white hover:text-rose-500 "
            >
              - IKO Kyokushinkaikan Facebook
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="w-full h-22 flex flex-col items-center justify-center mt-8">
        <div className="text-md text-white">
          Copyright © 2024 Kyokushin Bangladesh{" "}
        </div>

        <div className="text-md text-white">
          Developed by{" "}
          <Link
            href={"https://monabbir.vercel.app/"}
            passHref
            rel="noopener noreferrer"
            target="_blank"
            className="base-bold cursor-pointer"
          >
            Monabbir Bhuiyan
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
