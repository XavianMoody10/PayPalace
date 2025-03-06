import React from "react";
import { Header } from "../layouts/Header/Header";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Footer } from "../layouts/Footer/Footer";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";
import { OurValue } from "../components/OurValue/OurValue";
import { OurTeam } from "../components/OurTeam/OurTeam";
import { Collaboration } from "../components/Collaboration/Collaboration";
import { ContactTemplateAd } from "../components/ContactTemplateAd/ContactTemplateAd";

export const About = () => {
  return (
    <>
      <Header />

      <main className=" bg-light-blue">
        <AboutUs />

        <OurValue />

        <MarqueeSlider />

        <OurTeam />

        <MarqueeSlider />

        <Collaboration />

        <ContactTemplateAd />
      </main>

      <Footer />
    </>
  );
};
