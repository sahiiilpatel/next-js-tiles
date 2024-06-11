import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { filterableDataSlim } from "@/data/FilterableData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Catalogue from "@/components/Catalogue";

const SlimCategory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slimcategory } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!slimcategory) return;
      if (!filterableDataSlim) return;

      const response = filterableDataSlim.find(
        (item) => item[0] === slimcategory
      );

      if (response) {
        const updateddata = response.slice(1);
        setData(updateddata as any);
      }

      setLoading(false);
    };

    fetchData();
  }, [slimcategory]);

  if (!slimcategory || loading) {
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
        navbarImagePath="/assets/images/slim/5_MM/Metalic/IRONY_AQUA_Preview.jpg"
        navbarTitle={`SLIM TILES - ${slimcategory}`}
      />
      <Catalogue />
      <Footer />
    </>
  );
};

export default SlimCategory;
