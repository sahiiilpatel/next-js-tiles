import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { porcelainData } from "@/data/FilterableData";

const Porcelain = () => {
  return (
    <>
      <Header />
      <MainCategory CategoryData={porcelainData} navbarImagePath="/assets/images/Porcelain/600x1200/Glossy/Anigma_Gold.jpg" navbarTitle="PORCELAIN TILES" />
      <Footer />
    </>
  );
};

export default Porcelain;