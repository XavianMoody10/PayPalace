import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ children, extraStyle }) => {
  return (
    <Link
      to={"/"}
      className={` text-center bg-dark-blue text-white border-2 border-white font-semibold whitespace-nowrap py-3 px-7 rounded-4xl duration-150 hover:bg-white hover:text-dark-blue hover:border-dark-blue ${extraStyle}`}
    >
      {children}
    </Link>
  );
};
