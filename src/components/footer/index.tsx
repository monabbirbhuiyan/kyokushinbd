import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-22 flex flex-col bg-black items-center justify-center mt-8">
        <div className="text-md text-white ">
          Copyright © 2024 Kyokushin Bangladesh {""}
        </div>

        <div className="text-md text-white ">
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
