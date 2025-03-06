import React, { useRef } from "react";
import loremipsumLogo1 from "../../assets/logoipsum-logo-1.svg";
import loremipsumLogo2 from "../../assets/logoipsum-logo-2.svg";
import loremipsumLogo3 from "../../assets/logoipsum-logo-3.svg";
import { motion, useInView } from "motion/react";

export const Collaboration = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section ref={sectionRef} className=" mt-16">
      <div className=" w-[90%] max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:justify-between sm:gap-10">
        <motion.h2
          initial={isDesktop ? { x: -30, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" font-primary font-semibold text-3xl lg:text-4xl"
        >
          Collaboration
        </motion.h2>

        <motion.div
          initial={isDesktop ? { x: 30, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" space-y-7 lg:max-w-[700px]"
        >
          <p className=" font-primary lg:w-[95%] min-[800px]:text-xl">
            We value diversity, sustainability and cultural transformation and
            will continue to work with various collaborators who share the same
            values.
          </p>

          <div className=" grid grid-cols-2 gap-2 sm:grid-cols-1 sm:max-w-[200px] lg:grid-cols-3 lg:max-w-none lg:gap-4">
            <div className=" bg-white p-6 rounded-md">
              <img src={loremipsumLogo1} alt="" width="100%" />
            </div>
            <div className=" bg-white p-6 rounded-md">
              <img src={loremipsumLogo2} alt="" width="100%" />
            </div>
            <div className=" bg-white p-6 rounded-md">
              <img src={loremipsumLogo3} alt="" width="100%" />
            </div>
            <div className=" bg-white p-6 rounded-md">
              <img src={loremipsumLogo1} alt="" width="100%" />
            </div>
            <div className=" bg-white p-6 rounded-md">
              <img src={loremipsumLogo2} alt="" width="100%" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
