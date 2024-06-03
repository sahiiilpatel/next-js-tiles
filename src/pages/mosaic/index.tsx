import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { mosaicData } from "@/data/FilterableData";

const Mosaic = () => {
  return (
    <>
      <Header />
      <MainCategory CategoryData={mosaicData} navbarImagePath="/assets/images/mosaic/SQUARE/CR_0215_Preview.jpg" navbarTitle="MOSAIC TILES" />
      <Footer />
    </>
  );
};

export default Mosaic;