import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { slimTilesData } from '@/data/FilterableData';
import Loader from '@/components/Loader';
import Header from '@/components/header/Header';
import Tile from '@/components/tile/Tile';
import Footer from '@/components/footer/Footer';

const SlimTile = () => {
  const [tileData, setTileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { tile } = router.query;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (tile && typeof tile === "string") {
        const tile_name = "slim_" + tile;
        const response = slimTilesData.find((item) => item[0] === tile_name);
        setTileData(response ? response[1] : null);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [tile]);

  if (!tileData || !tile) {
    return (
      <>
        <Header />
        <div className='w-screen h-screen flex font-medium justify-center items-center flex-col'>
          <p className='text-lg'>Data for this tile is currently unavailable.</p>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-full mt-2'
            onClick={() => { router.push('/') }}
          >
            Return to Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Tile tileData={tileData} navbarTitle={tile.toString()} />
          <Footer />
        </>
      )}
    </>
  );
};

export default SlimTile;
