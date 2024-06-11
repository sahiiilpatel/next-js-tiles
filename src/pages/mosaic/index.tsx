import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { mosaicData } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import Catalogue from "@/components/Catalogue";

const Mosaic = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainCategory CategoryData={mosaicData} navbarImagePath="/assets/images/mosaic/SQUARE/CR_0215_Preview.jpg" navbarTitle="MOSAIC TILES" />
          <Catalogue />
          <Footer />
        </>
      )}
    </>
  );
};

export default Mosaic;