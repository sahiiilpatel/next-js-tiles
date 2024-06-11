import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { filterableDataCeramic } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Catalogue from "@/components/Catalogue";

const CeramicCategory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { ceramiccategory } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!ceramiccategory) return;
      if (!filterableDataCeramic) return;

      const response = filterableDataCeramic.find(
        (item) => item[0] === ceramiccategory
      );

      if (response) {
        const updateddata = response.slice(1);
        setData(updateddata as any);
      }

      setLoading(false);
    };

    fetchData();
  }, [ceramiccategory]);

  if (!ceramiccategory || loading) {
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
        navbarImagePath="/assets/images/Ceramic/300x600/Glossy_Matt_Both_Surface/ALTRA_IVORY/ALTRA_IVORY_001.jpg"
        navbarTitle={`CERAMIC TILES - ${ceramiccategory}`}
      />
      <Catalogue />
      <Footer />
    </>
  );
};

export default CeramicCategory;
