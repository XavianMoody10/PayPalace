import React, { useRef } from "react";
import TeamMember1 from "../../assets/team-image-1.png";
import TeamMember2 from "../../assets/team-image-2.png";
import TeamMember3 from "../../assets/team-image-3.png";
import TeamMember4 from "../../assets/team-image-4.png";
import { motion, useInView } from "motion/react";

export const OurTeam = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section
      ref={sectionRef}
      className=" w-[90%] mx-auto max-w-[1400px] rounded-3xl pt-10 pb-16 min-[900px]:flex min-[900px]:justify-between min-[900px]:gap-8"
    >
      <motion.h2
        initial={isDesktop ? { x: -30, opacity: 0 } : { x: 0, opacity: 1 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" font-primary font-semibold text-3xl lg:text-4xl"
      >
        Our team
      </motion.h2>

      <motion.div
        initial={isDesktop ? { x: 30, opacity: 0 } : { x: 0, opacity: 1 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" mt-5 grid grid-cols-1 gap-5 max-w-[600px] min-[500px]:grid-cols-2"
      >
        <div className=" bg-white rounded-3xl">
          <div>
            <img
              src={TeamMember1}
              alt="Richard Lowe Image"
              className=" rounded-t-3xl w-full"
            />
          </div>

          <div className=" p-5 space-y-3">
            <p className=" font-primary font-semibold text-xl">Richard Lowe</p>

            <p className=" font-primary font-medium">Founder</p>
          </div>
        </div>

        <div className=" bg-white rounded-3xl">
          <div>
            <img
              src={TeamMember2}
              alt="Lindsay Rice Image"
              className=" rounded-t-3xl w-full"
            />
          </div>

          <div className=" p-5 space-y-3">
            <p className=" font-primary font-semibold text-xl">Richard Lowe</p>

            <p className=" font-primary font-medium">Founder</p>
          </div>
        </div>

        <div className=" bg-white rounded-3xl">
          <div>
            <img
              src={TeamMember3}
              alt="Ernesto Schemeler Image"
              className=" rounded-t-3xl w-full"
            />
          </div>

          <div className=" p-5 space-y-3">
            <p className=" font-primary font-semibold text-xl">Richard Lowe</p>

            <p className=" font-primary font-medium">Founder</p>
          </div>
        </div>

        <div className=" bg-white rounded-3xl">
          <div>
            <img
              src={TeamMember4}
              alt="Tanya Wehner Image"
              className=" rounded-t-3xl w-full"
            />
          </div>

          <div className=" p-5 space-y-3">
            <p className=" font-primary font-semibold text-xl">Richard Lowe</p>

            <p className=" font-primary font-medium">Founder</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
