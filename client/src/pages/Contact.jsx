import React from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";

export const Contact = () => {
  return (
    <>
      <Header></Header>
      <main className=" bg-light-blue">
        <div className=" flex flex-col gap-3 justify-between w-[90%] max-w-[1400px] mx-auto mb-24 lg:flex-row lg:items-center pt-10">
          <h1 className=" font-primary font-semibold text-4xl sm:text-5xl sm:leading-14">
            Contact
          </h1>

          <p className="text-[0.8rem] font-primary lg:text-[0.95rem] lg:max-w-[550px]">
            We value diversity, sustainability and cultural transformation and
            will continue to work with various collaborators who share the same
            values.
          </p>
        </div>

        <div className=" bg-[#8694B5] p-7 w-[90%] max-w-[1400px] mx-auto mb-20 rounded-2xl sm:p-10">
          <p className=" text-white text-center font-primary mx-auto lg:w-[80%] min-[800px]:text-xl">
            We would love to hear from you. Fill in the web form below and our
            sales rep will reach out to you within 24 hours.
          </p>

          <form className=" space-y-5 mt-6 max-w-[600px] mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" bg-white w-full p-2 font-primary rounded-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" bg-white w-full p-2 font- rounded-sm"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={3}
              className=" bg-white w-full p-2 font-primary rounded-sm"
            ></textarea>

            <button className=" w-full text-center bg-dark-blue text-white font-semibold whitespace-nowrap py-3 px-7 rounded-xl duration-150 hover:bg-white hover:text-dark-bluebg-dark-blue hover:border-dark-bluebg-dark-blue">
              Sign Up
            </button>
          </form>
        </div>

        <MarqueeSlider />

        <div className=" w-[90%] mx-auto max-w-[1400px] py-12">
          <h2 className=" font-primary font-semibold text-4xl sm:text-5xl sm:leading-14">
            Corporate offices
          </h2>

          <div className=" flex flex-col justify-between gap-5 mt-10 sm:flex-row">
            <div className=" space-y-4">
              <p className=" font-primary text-lg">Los Angeles, CA</p>
              <p className=" font-primary text-sm">
                2553 Gateway Avenue Los Angeles, CA 90017
              </p>
            </div>

            <div className=" space-y-4">
              <p className=" font-primary text-lg">New York, NY</p>
              <p className=" font-primary text-sm">
                2041 Godfrey Road New York, NY 10005
              </p>
            </div>

            <div className=" space-y-4">
              <p className=" font-primary text-lg">Chicago, IL</p>
              <p className=" font-primary text-sm">
                156 Oak Avenue North 60064
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};
