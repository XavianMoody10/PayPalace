import React from "react";
import { Header } from "../layouts/Header/Header";
import { MarqueeSlider } from "../components/MarqueeSlider/MarqueeSlider";
import { Footer } from "../layouts/Footer/Footer";
import { Sponsors } from "../components/Sponsor/Sponsors";
import { TemplateAd } from "../components/TemplateAd/TemplateAd";
import { ProfessionalService } from "../components/ProfessionalService/professionalService";
import { Services } from "../components/Services/Services";
import { ScalablePaymentInfo } from "../components/ScalablePaymentInfo/ScalablePaymentInfo";
import { LatestBlogs } from "../components/LatestBlogs/LatestBlogs";
import { Landing } from "../components/Landing/Landing";

export const Home = () => {
  return (
    <>
      <Header />

      <main className=" bg-light-blue">
        <Landing />

        <MarqueeSlider />

        <ScalablePaymentInfo />

        <Services />

        <MarqueeSlider />

        <TemplateAd />

        <MarqueeSlider />

        <ProfessionalService />

        <MarqueeSlider />

        <Sponsors />

        <LatestBlogs />
      </main>

      <Footer />
    </>
  );
};
