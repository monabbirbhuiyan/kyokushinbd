import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="relative flex w-full h-full min-h-screen min-w-screen items-center justify-center bg-bannerImg bg-no-repeat bg-cover overflow-hidden">
      <div className="hidden md:flex absolute inset-0 items-center justify-center">
        <Image
          src="/assets/KanjiBack.png"
          width={2000} // Set the desired width
          height={2000} // Set the desired height
          alt="Kanku"
          className="mix-blend-overlay object-contain"
          priority
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
