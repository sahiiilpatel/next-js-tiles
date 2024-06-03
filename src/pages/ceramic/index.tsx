import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { mosaicData } from "@/data/FilterableData";
import Loader from "@/components/Loader";

const Ceramic = () => {
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
          <MainCategory CategoryData={mosaicData} navbarImagePath="assets/images/a.jpg" navbarTitle="CERAMIC TILES" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Ceramic;