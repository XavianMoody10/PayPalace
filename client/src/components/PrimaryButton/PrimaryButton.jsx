import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ children }) => {
  return (
    <Link
      to={"/"}
      className=" bg-[#005CFF] text-lg text-white border-2 border-white font-semibold whitespace-nowrap py-2 px-7 rounded-4xl duration-150 hover:bg-white hover:text-[#005CFF] hover:border-[#005CFF]"
    >
      {children}
    </Link>
  );
};
