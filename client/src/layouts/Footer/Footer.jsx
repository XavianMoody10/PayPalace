import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bg-[#E7F0FF] pt-20">
      <div className=" w-[90%] mx-auto max-w-[1400px] grid grid-cols-2 gap-10 min-[800px]:gap-32 lg:grid-cols-4">
        <div className=" col-span-3 space-y-2 lg:col-span-2">
          <div className=" flex gap-2">
            <input
              type="text"
              placeholder="Your E-mail"
              className=" p-2 bg-white rounded-lg w-full max-w-[800px]"
            />

            <button className=" text-center bg-[#005CFF] text-white border-2 border-white font-semibold whitespace-nowrap py-3 px-7 rounded-xl duration-150 hover:bg-white hover:text-[#005CFF] hover:border-[#005CFF]">
              Subscribe
            </button>
          </div>

          <p className=" text-sm min-[800px]:text-lg">
            By subscribing, you agree to our Privacy Policy, and you agree to
            receive updates from us.
          </p>
        </div>

        <div>
          <p className=" font-primary font-semibold text-lg">Sitemap</p>

          <ul className=" mt-2 space-y-2">
            <li>
              <Link className=" font-primary text-lg hover:text-steel-blue">
                Home
              </Link>
            </li>
            <li>
              <Link className=" font-primary text-lg hover:text-steel-blue">
                About us
              </Link>
            </li>
            <li>
              <Link className=" font-primary text-lg hover:text-steel-blue">
                Stories
              </Link>
            </li>
            <li>
              <Link className=" font-primary text-lg hover:text-steel-blue">
                Contact
              </Link>
            </li>
            <li>
              <Link className=" font-primary text-lg hover:text-steel-blue">
                404 page
              </Link>
            </li>
          </ul>
        </div>

        <div className=" place-items-end min-[800px]:place-items-start">
          <p className=" font-primary font-semibold text-lg">Follow us</p>

          <div className=" flex gap-3 mt-2">
            <Link>
              <i className="fa-brands fa-twitter fa-2x text-[#005CFF] hover:text-steel-blue"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-linkedin fa-2x text-[#005CFF] hover:text-steel-blue"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-facebook fa-2x text-[#005CFF] hover:text-steel-blue"></i>
            </Link>
          </div>
        </div>

        <ul className=" grid grid-cols-1 place-items-center justify-items-start gap-10 col-span-3 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-4">
          <li>Resolven © 2023</li>
          <li>2553 Gateway AvenueLos Angeles, CA 90017</li>
          <li>Email support@example.com</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <p className=" text-[#0A0F1C]/15 font-primary font-bold leading-normal text-5xl text-center  sm:text-[7rem] lg:text-[11rem] xl:text-[13.5rem] 2xl:text-[16.8rem]">
        PayPalace
      </p>
    </footer>
  );
};
