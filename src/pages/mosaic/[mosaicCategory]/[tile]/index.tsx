import Footer from "@/components/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { MosaicTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Tile from "@/components/tile/Tile";

const MosaicTile = () => {
  const [tileData, setTileData] = useState<any>(null);

  const router = useRouter();
  const { mosaicCategory, tile } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!tile || typeof tile !== "string") return;
      if (!mosaicCategory || typeof mosaicCategory !== "string") return;

      const tile_name = mosaicCategory + "_" + tile;
      const response = MosaicTilesData.find((item) => item[0] === tile_name);
      setTileData(response ? response[1] : null);
    };

    fetchData();
  }, [tile, mosaicCategory]);

  if (!mosaicCategory || !tile) {
    return (
      <div>
        <p>Mosaic category or tile not found.</p>
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

export default MosaicTile;
