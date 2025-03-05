import React from "react";
import loremipsumLogo1 from "../../assets/logoipsum-logo-1.svg";
import loremipsumLogo2 from "../../assets/logoipsum-logo-2.svg";
import loremipsumLogo3 from "../../assets/logoipsum-logo-3.svg";

export const Sponsors = () => {
  return (
    <div className=" w-[90%] max-w-[1400px] mx-auto bg-white p-8 rounded-2xl space-y-14">
      <h2 className=" font-primary font-semibold text-center text-2xl lg:text-3xl">
        “They've consistently facilitated smooth and efficient transactions.”
      </h2>

      <div className=" flex flex-col gap-8 max-w-[200px] mx-auto min-[600px]:flex-row min-[600px]:max-w-[600px]">
        <div>
          <img src={loremipsumLogo1} alt="sponsor logo 1" width={"100%"} />
        </div>
        <div>
          <img src={loremipsumLogo2} alt="sponsor logo 2" width={"100%"} />
        </div>
        <div>
          <img src={loremipsumLogo3} alt="sponsor logo 3" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
