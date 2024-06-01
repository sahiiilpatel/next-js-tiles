import Footer from "@/components/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { PorcelainTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Tile from "@/components/tile/Tile";

const PorcelainTile = () => {
  const [tileData, setTileData] = useState<any>(null);

  const router = useRouter();
  const { porcelaincategory, tile } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!tile || typeof tile !== "string") return;
      if (!porcelaincategory || typeof porcelaincategory !== "string") return;

      const tile_name = porcelaincategory + "_" + tile;
      const response = PorcelainTilesData.find((item) => item[0] === tile_name);
      setTileData(response ? response[1] : null);
    };

    fetchData();
  }, [tile, porcelaincategory]);

  if (!porcelaincategory || !tile) {
    return (
      <div>
        <p>Porcelain category or tile not found.</p>
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

export default PorcelainTile;
