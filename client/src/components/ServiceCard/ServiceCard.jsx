import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export const ServiceCard = ({ heading, icon, info }) => {
  const serviceCardRef = useRef(null);
  const isInView = useInView(serviceCardRef, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={serviceCardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-white p-8 rounded-2xl space-y-2"
    >
      <div className=" flex items-center justify-between">
        <h3 className=" font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
          {heading}
        </h3>

        <img src={icon} alt="" width={80} />
      </div>

      <p className="text-[0.8rem] font-primary lg:text-[0.95rem]">{info}</p>
    </motion.div>
  );
};
