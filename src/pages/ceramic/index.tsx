import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { ceramicData } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import Catalogue from "@/components/Catalogue";

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
          <MainCategory CategoryData={ceramicData} navbarImagePath="/assets/images/Ceramic/300x600/Glossy_Matt_Both_Surface/ALTRA_IVORY/ALTRA_IVORY_001.jpg" navbarTitle="CERAMIC TILES" />
          <Catalogue />
          <Footer />
        </>
      )}
    </>
  );
};

export default Ceramic;