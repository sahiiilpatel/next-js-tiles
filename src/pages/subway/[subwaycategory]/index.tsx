import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { filterableDataSubway } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Catalogue from "@/components/Catalogue";

const SubwayCategory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { subwaycategory } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!subwaycategory) return;
      if (!filterableDataSubway) return;

      const response = filterableDataSubway.find(
        (item) => item[0] === subwaycategory
      );

      if (response) {
        const updateddata = response.slice(1);
        setData(updateddata as any);
      }

      setLoading(false);
    };

    fetchData();
  }, [subwaycategory]);

  if (!subwaycategory || loading) {
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
        navbarImagePath="/assets/images/SUBWAY/3X12/3X12_PLAIN/3X12_PEWTER_GLOSSY_PLAIN.jpg"
        navbarTitle={`SUBWAY TILES - ${subwaycategory}`}
      />
      <Catalogue />
      <Footer />
    </>
  );
};

export default SubwayCategory;
