import React from "react";
import Header from "../navSection/Header";
import HeroSection from "../section/HeroSection";
import GridSection from "../section/GridSection";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        <Header />
        <HeroSection />
        <GridSection/>
      </div>
    </>
  );
};

export default HomePage;
