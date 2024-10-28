import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-22 flex flex-col bg-black items-center justify-center">
        <div className="text-md text-white ">
          Copyright © 2024 Kyokushin Bangladesh {""}
        </div>

        <div className="text-md text-white ">
          Developed by <span className="base-bold">Monabbir Bhuiyan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
