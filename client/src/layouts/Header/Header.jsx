import React from "react";

export const Header = () => {
  return (
    <header className=" bg-light-blue">
      <div className=" flex items-center justify-between py-3 w-[90%] max-w-[1400px] mx-auto md:py-5">
        <span className=" font-primary font-semibold text-xl lg:text-2xl">
          PayPalace
        </span>

        <div className=" flex flex-col gap-[4.5px] w-[25px]">
          <div className=" w-full h-[2.5px] bg-black"></div>
          <div className=" w-[90%] h-[2.5px] bg-black"></div>
          <div className=" w-[60%] h-[2.5px] bg-black"></div>
        </div>
      </div>
    </header>
  );
};
