import Footer from "@/components/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { subwayTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Tile from "@/components/tile/Tile";

const Fivemm = () => {
  const [tileData, setDataTwo] = useState<any>(null);

  const router = useRouter();
  const { subwaycategory, tile } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!tile || typeof tile !== "string") return;
      if (!subwaycategory || typeof subwaycategory !== "string") return;

      const tile_name = subwaycategory + "_" + tile;
      const response = subwayTilesData.find((item) => item[0] === tile_name);
      setDataTwo((response as any)[1]);
    };

    fetchData();
  }, [tile, subwaycategory]);

  if (!subwaycategory || !tile) {
    return (
      <div>
        <p>Subway category or tile not found.</p>
      </div>
    );
  }

  if (!tileData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Tile tileData={tileData} navbarTitle={tile.toString()} />
      <Footer />
    </>
  );

};

export default Fivemm;