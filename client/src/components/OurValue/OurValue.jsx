import React, { useRef } from "react";
import OurValueImage from "../../assets/our-value-image.png";
import { motion, useInView } from "motion/react";

export const OurValue = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section className=" pt-32" ref={sectionRef}>
      <div className=" w-[90%] mx-auto max-w-[1400px] flex flex-col lg:flex-row lg:justify-between">
        <motion.div
          initial={isDesktop ? { x: -30, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" space-y-4 lg:w-[50%]"
        >
          <h2 className=" font-primary font-semibold text-3xl lg:text-4xl">
            Our value
          </h2>

          <p className=" font-primary lg:w-[95%] min-[800px]:text-xl">
            We value diversity, sustainability and cultural transformation and
            will continue to work with various collaborators who share the same
            values.
          </p>

          <p className="text-[0.8rem] font-primary lg:text-[0.95rem]">
            Recently with the spread of the sober curious movement, we are
            seeing more bars, restaurants and services offering a variety of
            non-alcoholic beverages. However, we still feel that there is space
            for non-alcoholic beverages that are better-suited for people who
            want to pair with a good meal. It can often be too sugary or sweet.
            It can be healthy but not so tasty.
          </p>
        </motion.div>

        <motion.div
          initial={isDesktop ? { x: 30, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" mt-20 ml-auto relative sm:right-[20%] lg:left-0 lg:bottom-10"
        >
          <img src={OurValueImage} alt="" width={"250px"} />
        </motion.div>
      </div>
    </section>
  );
};
