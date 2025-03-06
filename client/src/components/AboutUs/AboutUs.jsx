import React from "react";
import AboutUsImage from "../../assets/about-us-image.png";

export const AboutUs = () => {
  return (
    <section className=" pt-16">
      <div className=" w-[90%] max-w-[1400px] mx-auto flex flex-col justify-between lg:flex-row">
        <div className=" space-y-3">
          <h1 className=" font-semibold text-4xl sm:text-5xl sm:leading-14 lg:text-7xl lg:leading-20">
            About Us
          </h1>

          <p className=" font-primary lg:w-[80%] min-[800px]:text-xl">
            If you're just getting started or searching for a change, you've
            come to the correct spot.
          </p>
        </div>

        <div className=" mt-3 w-full">
          <img src={AboutUsImage} alt="" className=" w-full" />
        </div>
      </div>
    </section>
  );
};
