import React from "react";
import { Header } from "../layouts/Header";
import { AboutUs } from "../components/AboutUs/AboutUs";

export const About = () => {
  return (
    <>
      <Header />

      <main className=" bg-light-blue">
        <AboutUs />

        <section></section>
      </main>
    </>
  );
};
