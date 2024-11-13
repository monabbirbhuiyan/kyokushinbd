import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white z-50 ">
      <Image
        src={"/assets/kankubd.png"}
        width={200}
        height={200}
        alt="loading"
        className="animate-spin text-rose-700 text-4xl"
      />
    </div>
  );
}
