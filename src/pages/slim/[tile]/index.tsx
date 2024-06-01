import React, { useEffect, useState } from "react";
import { slimTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Tile from "@/components/tile/Tile";

const SlimTile = () => {
  const [tileData, setDataTwo] = useState<any>(null);

  const router = useRouter();
  const { tile } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!tile || typeof tile !== "string") return;

      const tile_name = "slim_" + tile;
      const response = slimTilesData.find((item) => item[0] === tile_name);
      if (!response) {
        router.push('/');
        return;
      }
      setDataTwo((response as any)[1]);
    };

    fetchData();
  }, [tile, router]);

  if (!tile) {
    return (
      <div>
        <p>slim tile not found.</p>
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

export default SlimTile;
