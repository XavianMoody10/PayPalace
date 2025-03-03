import React from "react";
import HeroImage from "../assets/hero-image.png";
import { Header } from "../layouts/Header";
import { PrimaryButton } from "../components/PrimaryButton/PrimaryButton";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";

export const Home = () => {
  return (
    <>
      <Header />

      <main className=" min-h-screen bg-[#E7F0FF]">
        <section className=" pt-14 w-[90%] max-w-[1400px] mx-auto flex flex-col gap-7">
          <h1 className=" font-semibold text-4xl sm:text-5xl sm:leading-14 lg:text-7xl lg:leading-20">
            An Entirely New Visual Experience For Wireless POS Devices
          </h1>

          <div className=" flex flex-col justify-between items-start gap-2 sm:flex-row sm:items-center">
            <PrimaryButton>Contact Us</PrimaryButton>

            <p className=" font-primary sm sm:text-end sm:w-[68%] xl:text-xl">
              Our scalable payment processing solutions help you work better
            </p>
          </div>

          <img src={HeroImage} alt="Person holding a tablet device" />
        </section>

        <MarqueeSlider />
      </main>
    </>
  );
};
