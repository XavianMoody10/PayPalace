import React, { useRef } from "react";
import paymentImage1 from "../../assets/payment-image-1.png";
import paymentImage2 from "../../assets/payment-image-2.png";
import paymentIcon1 from "../../assets/payment-icon-1.svg";
import paymentIcon2 from "../../assets/payment-icon-2.svg";
import paymentIcon3 from "../../assets/payment-icon-3.svg";
import { motion, useInView } from "motion/react";

export const ScalablePaymentInfo = () => {
  const paymentSectionRef = useRef(null);
  const isInView = useInView(paymentSectionRef, { amount: 0.3, once: true });

  return (
    <motion.section
      ref={paymentSectionRef}
      className=" w-[90%] max-w-[1400px] mx-auto mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className=" bg-white pt-14 pb-20 px-3 rounded-4xl sm:px-10 min-[800px]:px-16">
        <h2 className=" font-semibold text-4xl text-center lg:text-5xl lg:leading-16">
          Work faster and smarter with our scalable payment
        </h2>

        <div className=" flex flex-col items-center lg:flex-row lg:justify-between lg:items-start lg:gap-11">
          <div className=" relative w-full max-w-[500px] mt-10">
            <img src={paymentImage1} alt="" width={"60%"} />
            <img
              src={paymentImage2}
              alt=""
              width={"60%"}
              className=" absolute top-[30px] left-[40%] sm:top-[50px]"
            />
          </div>

          <div className=" mt-14 sm:mt-20 lg:mt-[90px]">
            <p className=" font-primary min-[800px]:text-xl">
              Our guiding principle is to support many thriving small and medium
              sized businesses.
            </p>

            <div className=" flex flex-col items-start justify-between gap-4 mt-10 sm:flex-row">
              <div className=" space-y-2">
                <div className=" w-[40px]">
                  <img
                    src={paymentIcon1}
                    alt="Payment wallet icon"
                    className=" w-full h-[40px]"
                  />
                </div>
                <p className=" text-[0.75rem] font-primary min-[800px]:max-w-[220px] 2xl:text-[0.9rem]">
                  Smart terminals are designed to give you seamless payment
                  experience.
                </p>
              </div>

              <div className=" space-y-2">
                <div className=" w-[40px]">
                  <img
                    src={paymentIcon2}
                    alt="Payment wallet icon"
                    className=" w-full h-[40px]"
                  />
                </div>
                <p className=" text-[0.75rem] font-primary min-[800px]:max-w-[220px] 2xl:text-[0.9rem]">
                  Accept digital payments anywhere with advanced security
                  features
                </p>
              </div>

              <div className=" space-y-2">
                <div className=" w-[40px]">
                  <img
                    src={paymentIcon3}
                    alt="Payment wallet icon"
                    className=" w-full h-[40px]"
                  />
                </div>
                <p className=" text-[0.75rem] font-primary min-[800px]:max-w-[220px] 2xl:text-[0.9rem]">
                  Sync your payment processing with your online shopping cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
