import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PorcelainTilesData } from '@/data/FilterableData';
import Loader from '@/components/Loader';
import Header from '@/components/header/Header';
import Tile from '@/components/tile/Tile';
import Footer from '@/components/footer/Footer';

const PorcelainTile = () => {
  const [tileData, setTileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [paramsValidated, setParamsValidated] = useState(false);
  const [delayExpired, setDelayExpired] = useState(false);

  const router = useRouter();
  const { porcelaincategory, tile } = router.query;

  useEffect(() => {
    const validateParams = () => {
      if (!tile || typeof tile !== "string" || !porcelaincategory || typeof porcelaincategory !== "string") {
        setParamsValidated(true);
        setLoading(false);
        return;
      }
      setParamsValidated(true);
      fetchData();
    };

    const fetchData = async () => {
      const tile_name = porcelaincategory + "_" + tile;
      const response = PorcelainTilesData.find((item) => item[0] === tile_name);
      setTileData(response ? response[1] : null);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      setDelayExpired(true);
    }, 1000);

    validateParams();

    return () => clearTimeout(timer);
  }, [tile, porcelaincategory]);

  if (!paramsValidated || !delayExpired) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  if (!porcelaincategory || !tile) {
    return (
      <div>
        <p className='flex justify-center items-center w-screen h-screen'>Porcelain category or tile not found.</p>
      </div>
    );
  }

  if (!tileData) {
    return (
      <>
        <div className='w-screen h-screen flex font-medium justify-center items-center flex-col'>
          <p className='text-lg'>Data for this tile is currently unavailable.</p>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-full mt-2'
            onClick={() => { router.push('/') }}
          >
            Return to Home
          </button>
        </div>
      </>
    );
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
