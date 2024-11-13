import { getAuthUserDetails } from "@/actions/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await getAuthUserDetails();

  if (user) {
    return redirect("/students");
  }

  const authUser = await currentUser();

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl"> Create Account</h1>
        {/* <UserDetails /> */}
      </div>
    </div>
  );
};

export default Page;
