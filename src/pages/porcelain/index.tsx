import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { porcelainData } from "@/data/FilterableData";
import Loader from "@/components/Loader";

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
          <MainCategory CategoryData={porcelainData} navbarImagePath="/assets/images/Porcelain/600x1200/Glossy/Anigma_Gold.jpg" navbarTitle="PORCELAIN TILES" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Porcelain;