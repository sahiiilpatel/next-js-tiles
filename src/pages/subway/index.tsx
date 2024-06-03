import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { subwayData } from "@/data/FilterableData";

const Subway = () => {
  return (
    <>
      <Header />
      <MainCategory CategoryData={subwayData} navbarImagePath="/assets/images/SUBWAY/4X12/BEVEL/4X12_BEVEL_FOREST_GREEN_PREVIEW.jpg" navbarTitle="SUBWAY TILES" />
      <Footer />
    </>
  );
};

export default Subway;
