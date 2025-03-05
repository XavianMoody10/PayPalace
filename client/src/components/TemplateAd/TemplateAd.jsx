import React from "react";
import backgroundImageq from "../../assets/increase-sales-bg.png";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export const TemplateAd = () => {
  return (
    <div className=" w-[90%] max-w-[1400px] mx-auto flex flex-col gap-5 my-12 rounded-4xl min-[800px]:bg-[url(./assets/increase-sales-bg.png)] min-[800px]:min-h-[600px] min-[800px]:justify-center min-[800px]:items-center min-[800px]:bg-cover min-[1400px]:min-h-[700px]">
      <img
        src={backgroundImageq}
        alt="Lady paying at register"
        className=" mx-auto min-[800px]:hidden"
        width={"100%"}
      />

      <div className=" bg-white p-5 rounded-2xl space-y-14 min-[800px]:w-[40%] min-[800px]:mx-auto">
        <h3 className=" font-primary font-semibold text-xl min-[400px]:text-2xl sm:text-xl min-[800px]:text-2xl lg:text-3xl">
          Increase your sales, expand your product range
        </h3>

        <PrimaryButton extraStyle={" block w-full"}>Buy Template</PrimaryButton>
      </div>
    </div>
  );
};
