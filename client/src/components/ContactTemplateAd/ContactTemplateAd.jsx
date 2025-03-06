import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";

export const ContactTemplateAd = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <motion.div
      ref={sectionRef}
      initial={isDesktop ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
      animate={isInView && { y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" w-[90%] max-w-[1400px] mx-auto bg-navy-blue py-12 flex flex-col items-center gap-7 rounded-2xl mt-28"
    >
      <h3 className=" text-white text-center font-primary font-semibold text-3xl lg:text-4xl">
        Contact
      </h3>

      <p className="text-white text-center text-[0.8rem] font-primary max-w-[600px] lg:text-[0.95rem]">
        Please contact Sober Experience Studio through our online contact form
        with any questions or collaboration inquiries.
      </p>

      <Link className=" text-center bg-dark-blue text-white font-semibold whitespace-nowrap py-3 px-7 rounded-4xl duration-150 hover:bg-white hover:text-dark-bluebg-dark-blue hover:border-dark-bluebg-dark-blue">
        Buy Template
      </Link>
    </motion.div>
  );
};
