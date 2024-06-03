import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Loader from "@/components/Loader";
import MainCategory from "@/components/MainCategory";
import { categoryData } from "@/data/FilterableData";
import { useEffect, useState } from "react";

export default function Products() {
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
          <MainCategory CategoryData={categoryData} navbarImagePath="/assets/images/slim/5_MM/Metalic/IRONY_AQUA_Preview.jpg" navbarTitle="PRODUCTS" />
          <Footer />
        </>
      )}
    </>
  );
}
