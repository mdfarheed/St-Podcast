import React from "react";
import Header from "../navSection/Header";
import HeroSection from "../section/HeroSection";
import GridSection from "../section/GridSection";
import AboutSection from "../section/AboutSection";
import ServiceSection from "../section/ServiceSection";
import WorkingImageGrid from "../section/WorkingImageGrid";
import WorkProcess from "../section/WorkProcess";
import PodcastPlans from "../section/PodcastPlans";
import ContactSection from "../section/ContactSection";
import Footer from "../navSection/Footer";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        <Header />
        <HeroSection />
        <GridSection />
        <div id="about">
          <AboutSection />
        </div>
        <ServiceSection />
        <WorkingImageGrid />
        <WorkProcess />
        <div id="price">
          <PodcastPlans />
        </div>
        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
