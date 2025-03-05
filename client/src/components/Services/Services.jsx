import React from "react";
import servicesIcon1 from "../../assets/services-icon-1.svg";
import servicesIcon2 from "../../assets/services-icon-2.svg";
import servicesIcon3 from "../../assets/services-icon-3.svg";
import servicesIcon4 from "../../assets/services-icon-4.svg";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const Services = () => {
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
    <section className=" w-[90%] max-w-[1400px] mx-auto pt-10 mb-10 sm:mb-24">
      <h2 className=" font-semibold text-4xl text-center lg:text-5xl lg:leading-16">
        Our services
      </h2>

      <div className=" grid gap-x-3 gap-y-7 sm:grid-cols-2 mt-10">
        {servicesMap}
      </div>
    </section>
  );
};
