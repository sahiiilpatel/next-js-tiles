import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { filterableDataMosaic } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Catalogue from "@/components/Catalogue";

const MosaicCategory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { mosaiccategory } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!mosaiccategory) return;
      if (!filterableDataMosaic) return;

      const response = filterableDataMosaic.find(
        (item) => item[0] === mosaiccategory
      );

      if (response) {
        const updateddata = response.slice(1);
        setData(updateddata as any);
      }

      setLoading(false);
    };

    fetchData();
  }, [mosaiccategory]);

  if (!mosaiccategory || loading) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <div className="w-full h-full flex justify-center items-center">No data found for the specified category.</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <MainCategory
        CategoryData={data}
        navbarImagePath="/assets/images/mosaic/Hexagon/M_1751_Preview.jpg"
        navbarTitle={`MOSAIC TILES - ${mosaiccategory}`}
      />
      <Catalogue />
      <Footer />
    </>
  );
};

export default MosaicCategory;
