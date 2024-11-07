import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ProfileLayout;
