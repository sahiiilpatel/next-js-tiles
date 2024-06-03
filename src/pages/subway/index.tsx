import React, { useState, useEffect } from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainCategory from '@/components/MainCategory';
import { subwayData } from '@/data/FilterableData';
import Loader from '@/components/Loader';

const Subway = () => {
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
          <MainCategory
            CategoryData={subwayData}
            navbarImagePath="/assets/images/SUBWAY/4X12/BEVEL/4X12_BEVEL_FOREST_GREEN_PREVIEW.jpg"
            navbarTitle="SUBWAY TILES"
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default Subway;
