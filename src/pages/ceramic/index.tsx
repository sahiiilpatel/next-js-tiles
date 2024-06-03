import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { mosaicData } from "@/data/FilterableData";

const Ceramic = () => {
  return (
    <>
      <Header />
      <MainCategory CategoryData={mosaicData} navbarImagePath="assets/images/a.jpg" navbarTitle="CERAMIC TILES" />
      <Footer />
    </>
  );
};

export default Ceramic;