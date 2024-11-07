import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const BranchesLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-wrap">{children}</div>
      <Footer />
    </>
  );
};

export default BranchesLayout;
