import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MosaicTilesData } from '@/data/FilterableData';
import Loader from '@/components/Loader';
import Header from '@/components/header/Header';
import Tile from '@/components/tile/Tile';
import Footer from '@/components/footer/Footer';
import { Slide, toast } from 'react-toastify';

const MosaicTile = () => {
  const [tileData, setTileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [paramsValidated, setParamsValidated] = useState(false);
  const [delayExpired, setDelayExpired] = useState(false);

  const router = useRouter();
  const { mosaicCategory, tile } = router.query;

  useEffect(() => {
    const validateParams = () => {
      if (!tile || typeof tile !== "string" || !mosaicCategory || typeof mosaicCategory !== "string") {
        setParamsValidated(true);
        setLoading(false);
        return;
      }
      setParamsValidated(true);
      fetchData();
    };

    const fetchData = async () => {
      const tile_name = mosaicCategory + "_" + tile;
      const response = MosaicTilesData.find((item) => item[0] === tile_name);
      setTileData(response ? response[1] : null);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      setDelayExpired(true);
    }, 1000);

    validateParams();

    return () => clearTimeout(timer);
  }, [tile, mosaicCategory]);

  if (!paramsValidated || !delayExpired) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  if (!mosaicCategory || !tile) {
    return (
      <div>
        <p className='flex justify-center items-center w-screen h-screen'>Mosaic category or tile not found.</p>
      </div>
    );
  }

  if (!tileData) {
    toast.error('Data for this tile is currently unavailable.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    router.push('/mosaic')
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
