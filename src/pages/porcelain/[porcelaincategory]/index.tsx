import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { filterableDataPorcelain } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Catalogue from "@/components/Catalogue";

const PorcelainCategory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { porcelaincategory } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!porcelaincategory) return;
      if (!filterableDataPorcelain) return;

      const response = filterableDataPorcelain.find(
        (item) => item[0] === porcelaincategory
      );

      if (response) {
        const updateddata = response.slice(1);
        setData(updateddata as any);
      }

      setLoading(false);
    };

    fetchData();
  }, [porcelaincategory]);

  if (!porcelaincategory || loading) {
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
        navbarImagePath="/assets/images/Porcelain/300x600/Glossy_Matt_Both_Surface/LASA_WHITE/LASA_WHITE_001.jpg"
        navbarTitle={`PORCELAIN TILES - ${porcelaincategory}`}
      />
      <Catalogue />
      <Footer />
    </>
  );
};

export default PorcelainCategory;
