import React from "react";
import HeroImage from "../../assets/hero-image.png";
import { motion } from "motion/react";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export const Landing = () => {
  return (
    <section className=" pt-14 w-[90%] max-w-[1400px] mx-auto flex flex-col gap-7 mb-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" font-semibold text-4xl sm:text-5xl sm:leading-14 lg:text-7xl lg:leading-20"
      >
        An Entirely New Visual Experience For Wireless POS Devices
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        className=" flex flex-col justify-between items-start gap-2 sm:flex-row sm:items-center"
      >
        <PrimaryButton>Contact Us</PrimaryButton>

        <p className=" font-primary sm:text-end sm:w-[68%] min-[800px]:text-xl">
          Our scalable payment processing solutions help you work better
        </p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        src={HeroImage}
        alt="Person holding a tablet device"
      />
    </section>
  );
};
