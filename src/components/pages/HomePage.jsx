import React from "react";
import Header from "../navSection/Header";
import HeroSection from "../section/HeroSection";
import GridSection from "../section/GridSection";
import AboutSection from "../section/AboutSection";
import ServiceSection from "../section/ServiceSection";
import WorkingImageGrid from "../section/WorkingImageGrid";
import WorkProcess from "../section/WorkProcess";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        <Header />
        <HeroSection />
        <GridSection/>
        <AboutSection />
        <ServiceSection />
        <WorkingImageGrid/>
        <WorkProcess/>
      </div>
    </>
  );
};

export default HomePage;
