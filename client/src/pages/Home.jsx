import React, { useRef } from "react";
import { Header } from "../layouts/Header";
import { PrimaryButton } from "../components/PrimaryButton/PrimaryButton";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";
import { motion, useInView } from "motion/react";
import HeroImage from "../assets/hero-image.png";
import paymentImage1 from "../assets/payment-image-1.png";
import paymentImage2 from "../assets/payment-image-2.png";
import paymentIcon1 from "../assets/payment-icon-1.svg";
import paymentIcon2 from "../assets/payment-icon-2.svg";
import paymentIcon3 from "../assets/payment-icon-3.svg";
import servicesIcon1 from "../assets/services-icon-1.svg";
import servicesIcon2 from "../assets/services-icon-2.svg";
import servicesIcon3 from "../assets/services-icon-3.svg";
import servicesIcon4 from "../assets/services-icon-4.svg";

const ServiceCard = ({ heading, icon, info }) => {
  const serviceCardRef = useRef(null);
  const isInView = useInView(serviceCardRef, { amount: 0.3 });

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

export const Home = () => {
  const paymentSectionRef = useRef(null);
  const isInView = useInView(paymentSectionRef, { amount: 0.3 });
  const services = [
    {
      heading: "Enhance productivity",
      icon: servicesIcon1,
      info: "We are streamline your processes, optimize workflows, and empower your team to focus on what matters most – serving your customers. Say goodbye to inefficiencies and hello to increased output.",
    },
    {
      heading: "Complete support",
      icon: servicesIcon2,
      info: "We are streamline your processes, optimize workflows, and empower your team to focus on what matters most – serving your customers. Say goodbye to inefficiencies and hello to increased output.",
    },
    {
      heading: "Innovative technology",
      icon: servicesIcon3,
      info: "We are streamline your processes, optimize workflows, and empower your team to focus on what matters most – serving your customers. Say goodbye to inefficiencies and hello to increased output.",
    },
    {
      heading: "Reduce downtime",
      icon: servicesIcon4,
      info: "We are streamline your processes, optimize workflows, and empower your team to focus on what matters most – serving your customers. Say goodbye to inefficiencies and hello to increased output.",
    },
  ];

  const servicesMap = services.map((s, i) => {
    const isEvenIndex = i % 2 === 0;

    if (!isEvenIndex) {
      return (
        <div key={s.heading} className="sm:relative sm:top-10">
          <ServiceCard heading={s.heading} icon={s.icon} info={s.info} />
        </div>
      );
    } else {
      return (
        <ServiceCard
          key={s.heading}
          heading={s.heading}
          icon={s.icon}
          info={s.info}
        />
      );
    }
  });

  return (
    <>
      <Header />

      <main className=" min-h-screen bg-[#E7F0FF]">
        <section className=" pt-14 w-[90%] max-w-[1400px] mx-auto flex flex-col gap-7">
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

        <MarqueeSlider />

        <motion.section
          ref={paymentSectionRef}
          className=" w-[90%] max-w-[1400px] mx-auto"
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
                  Our guiding principle is to support many thriving small and
                  medium sized businesses.
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
                      Sync your payment processing with your online shopping
                      cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className=" w-[90%] max-w-[1400px] mx-auto py-10">
          <h2 className=" font-semibold text-4xl text-center lg:text-5xl lg:leading-16">
            Our services
          </h2>

          <div className=" grid gap-x-3 gap-y-7 sm:grid-cols-2 mt-10">
            {servicesMap}
          </div>
        </section>

        <MarqueeSlider />
      </main>
    </>
  );
};
