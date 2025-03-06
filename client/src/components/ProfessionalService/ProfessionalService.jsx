import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export const ProfessionalService = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className=" w-[90%] mx-auto max-w-[1400px] my-12 bg-navy-blue p-7 rounded-3xl lg:flex lg:justify-between lg:gap-8 lg:p-10"
    >
      <div className=" space-y-5">
        <h2 className=" text-white font-primary font-semibold text-3xl lg:text-4xl">
          What you will find
        </h2>

        <p className=" text-white font-primary sm:w-[68%] min-[800px]:text-xl">
          POS solution for your business
        </p>
      </div>

      <div className=" grid gap-4 sm:grid-cols-2 lg:w-[70%] mt-6 lg:mt-0">
        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>

        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>

        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>

        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>

        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>

        <div className=" w-full bg-dark-blue p-5 space-y-2 rounded-xl">
          <h3 className=" text-white font-primary font-semibold text-xl max-w-[150px] min-[400px]:text-2xl sm:text-xl lg:max-w-[100px] lg:text-2xl xl:max-w-none xl">
            Professional Services
          </h3>

          <p className=" text-white text-[0.8rem] font-primary lg:text-[0.95rem] w-full">
            Our dedicated professionals provide consulting, implementation, and
            support services tailored to your specific requirements, ensuring
            optimal utilization of our solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
