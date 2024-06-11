import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { porcelainData } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import Catalogue from "@/components/Catalogue";

const Porcelain = () => {
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
          <MainCategory CategoryData={porcelainData} navbarImagePath="/assets/images/Porcelain/300x600/Glossy_Matt_Both_Surface/STATUARIO_NUVO/STATUARIONUVO001.jpg" navbarTitle="PORCELAIN TILES" />
          <Catalogue />
          <Footer />
        </>
      )}
    </>
  );
};

export default Porcelain;