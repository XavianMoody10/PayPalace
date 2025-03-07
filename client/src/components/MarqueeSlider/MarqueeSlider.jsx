import React from "react";
import { motion } from "motion/react";
import GrowYourBusinessIcon from "../../assets/grow-your-business-icon.svg";

export const MarqueeSlider = () => {
  return (
    <div className=" w-full overflow-x-hidden  bg-light-blue">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{
          stiffness: 0,
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" w-[4200px]"
        style={{ display: "grid", gridTemplateColumns: "repeat(16, 1fr)" }}
      >
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>

        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>

        <div className=" flex w-full items-center gap-4">
          <img
            src={GrowYourBusinessIcon}
            alt="Grow your business icon"
            width={30}
          />

          <span className=" font-primary font-medium text-steel-blue whitespace-nowrap">
            Grow your business
          </span>
        </div>
      </motion.div>
    </div>
  );
};
