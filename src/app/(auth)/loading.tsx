import React from "react";
import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen ">
      <ImSpinner2 className="animate-spin text-rose-700 text-4xl" />
    </div>
  );
}
