import React from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";
import { PrimaryButton } from "../components/PrimaryButton/PrimaryButton";

export const PageNotFound = () => {
  return (
    <>
      <Header></Header>

      <main className=" bg-light-blue">
        <div className=" flex flex-col gap-3 justify-between w-[90%] max-w-[1400px] mx-auto lg:flex-row lg:items-center pt-10 pb-28">
          <div className=" space-y-10">
            <h1 className=" font-primary font-semibold text-4xl sm:text-7xl sm:leading-14">
              404
            </h1>

            <PrimaryButton>Back to Home</PrimaryButton>
          </div>

          <p className="text-[0.8rem] font-primary lg:text-[0.95rem] lg:max-w-[550px]">
            The page you're looking for might have been moved, deleted, or never
            existed in the first place. Don't worry it happens to the best of
            us.
          </p>
        </div>
      </main>

      <MarqueeSlider />

      <Footer></Footer>
    </>
  );
};
