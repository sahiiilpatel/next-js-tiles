import Footer from "@/components/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { ceramicTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Tile from "@/components/tile/Tile";

const CeramicTile = () => {
  const [tileData, setDataTwo] = useState<any>(null);

  const router = useRouter();
  const { ceramiccategory, tile } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!tile || typeof tile !== "string") return;
      if (!ceramiccategory || typeof ceramiccategory !== "string") return;

      const tile_name = ceramiccategory + "_" + tile;
      const response = ceramicTilesData.find((item) => item[0] === tile_name);
      setDataTwo((response as any)[1]);
    };

    fetchData();
  }, [tile, ceramiccategory]);

  if (!ceramiccategory || !tile) {
    return (
      <div>
        <p>ceramic category or tile not found.</p>
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

export default CeramicTile;
