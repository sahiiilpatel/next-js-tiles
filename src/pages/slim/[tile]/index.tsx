import React, { useEffect, useState } from "react";
import { slimTilesData } from "@/data/FilterableData";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollCounter from "@/components/Counter";
import ScrollCounter2 from "@/components/Counter2";
import ScrollCounter3 from "@/components/Counter3";
import ScrollCounter4 from "@/components/Counter4";

const Fivemm = () => {
  const [ToggleState, setToggleState] = useState(1);
  const [tileData, setDataTwo] = useState<any>(null);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const getActiveClass = (index: any, className: any) =>
    ToggleState === index ? className : "";

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
      <div className="relative mt-[100px]">
        <img
          src={`${tileData.main_img ? tileData.main_img : "/assets/images/a.jpg"}`}
          className="absolute inset-0 object-cover w-full h-full"
          alt="alt"
        />
        <div className="relative bg-opacity-50 h-[150px] md:h-auto bg-[#00000095]">
          <svg
            className="absolute inset-x-0 bottom-[-2px]"
            style={{ color: "#f8f8f8" }}
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none min-h-[300px] flex justify-start md:items-end">
                  {tile}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-heading text-center mt-[100px] mb-[40px] md:mb-[80px]">
        <h2>
          We believe in helping to create a beautiful<em> today </em> &amp;{" "}
          <span> tomorrow</span>
        </h2>
      </div>

      <div className="flex w-full h-full items-center justify-center">
        <div className="flex w-5/6 h-[500px] gap-4 image-slide">
          <div
            className="slide relative !flex-auto bg-cover bg-center !transition-all !duration-500 !ease-in-out !hover:flex-grow"
            style={{
              backgroundImage: `url(${tileData.img1})`,
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: `url(${tileData.img2})`,
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: `url(${tileData.img3})`,
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: `url(${tileData.img4})`,
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: `url(${tileData.img5})`,
            }}
          />
        </div>
      </div>

      {tileData.main_img && (
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex w-[95%] sm:h-[1000px] h-[500px] gap-4 image-slide py-5">
            <div
              className="slide relative flex-auto bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:flex-grow"
              style={{
                backgroundImage: `url(${tileData.main_img})`,
              }}
            />
          </div>
        </div>
      )}

      <div className="flex w-full h-full items-center justify-center py-1 md:py-5">
        <div className="w-[94%] h-auto gap-4 col-lg-12 md:w-11/12 md:h-auto">
          <div className="active-content flex flex-col md:flex-row md:items-start">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">CATEGORY</td>
                  <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.main_table.CATEGORY}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">APPLICATIONS</td>
                  <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.main_table.APPLICATIONS}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">FINISH</td>
                  <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.main_table.FINISH}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">CHIP SIZE</td>
                  <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.main_table.CHIP_SIZE}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">PER BOX COVERAGE AREA</td>
                  <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.main_table.PER_BOX_COVERAGE_AREA}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row !p-0 tab-mob">
        <div className="col-lg-12 h-auto">
          <div className="w-full h-auto">
            <ul className="h-auto w-full justify-center flex list-none md:text-lg mb-3 md:!mb-[50px]" >
              <li
                className={`w-[45%] flex justify-center items-center relative cursor-pointer font-semibold ${getActiveClass(1, "active-tabs")} ${!tileData.Packaging_table ? "w-full" : ""
                  }`}
                onClick={() => toggleTab(1)}
              >
                Specification
              </li>
              {tileData.Packaging_table && (
                <li
                  className={`w-[45%] flex justify-center items-center relative cursor-pointer font-semibold ${getActiveClass(2, "active-tabs")}`}
                  onClick={() => toggleTab(2)}
                >
                  Packaging Details
                </li>
              )}
            </ul>
            <div className="content-container">
              <div className={`content ${getActiveClass(1, "active-content")}`}>
                <div className="container p-0 mx-auto">
                  <div className="md:flex-1 px-2 md:px-4">
                    <p className="text-gray-500 text-justify">
                      It&rsquo;s best to know important factors while selecting
                      tiles. We had a big goal and used cutting-edge technology
                      to start a revolution, which caused us to plan. Our modern
                      equipment motivates us and continuously adorns the world
                      with unparalleled craftsmanship & unique surfaces. Our
                      features help you in selecting the perfect tile for the
                      perfect space.
                    </p>
                  </div>
                </div>
              </div>
              {tileData.Packaging_table && (
                <div
                  className={`content ${getActiveClass(2, "active-content flex justify-center flex-col md:flex-row md:items-start")} `}
                >
                  <table className="w-full md:w-11/12 border-collapse">
                    <tbody>
                      <tr>
                        <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg" >Size </td>
                        <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.Packaging_table.Size}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">Tiles / Box</td>
                        <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.Packaging_table.Tiles_Box}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">Box / Pallet</td>
                        <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.Packaging_table.Box_Pallet}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">Coverage Area</td>
                        <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.Packaging_table.Coverage_Area}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 border border-gray-300 text-sm md:text-base lg:text-lg">Pallet / Containers</td>
                        <td className="p-2 border border-gray-300 text-sm md:text-base lg:text-lg">{tileData.Packaging_table.Pallet_Containers}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="area-wrap justify-center md:my-[100px] ">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div className="service-sec">
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Floor-Tiles-Icon.png"
                  alt="Floor Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant <a href="/tiles/floor-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Wall-Tiles-Icon.png"
                  alt="Wall Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant <a href="/tiles/wall-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Bathroom-Tiles-Icon.png"
                  alt="Bathroom Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant
                <a href="/tiles/bathroom-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Kitchen-Tiles-Icon.png"
                  alt="Kitchen Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant
                <a href="/tiles/kitchen-tiles"></a>
              </div>
            </div>
          </div>
          <div className="service-sec">
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Floor-Tiles-Icon.png"
                  alt="Floor Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Floor Tiles <a href="/tiles/floor-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Wall-Tiles-Icon.png"
                  alt="Wall Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Wall Tiles <a href="/tiles/wall-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Bathroom-Tiles-Icon.png"
                  alt="Bathroom Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Bathroom Tiles <a href="/tiles/bathroom-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Kitchen-Tiles-Icon.png"
                  alt="Kitchen Tiles"
                  height={500}
                  width={500}
                  loading="lazy"
                />
              </div>
              <div className="area-txt">
                Kitchen Tiles <a href="/tiles/kitchen-tiles"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="row flex items-center justify-center h-full relative fixed-bg my-10">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/assets/images/background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="parallax-inner absolute parallax-items item-1 ">
          We invite our clients to look through our designer tile collections,
          experiment with the shades and patterns, and create exclusive,
          individually designed tile arrangements.
        </div>
      </section>
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <p className="text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl text-center mt-[100px] mb-[10px]">
              Discover
              <span className="px-2 py-1 relative inline-block">
                <svg
                  className="stroke-current bottom-0 absolute text-[#FF334B] -translate-x-2"
                  viewBox="0 0 410 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                    strokeWidth="12"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <span className="relative">Flowless International</span>
              </span>
            </p>
            <section className="numbers dark-blue-bg white-txt">
              <div className="marged">
                {/* item 01 */}
                <div className="number-item">
                  <h2 className="value">
                    <ScrollCounter />
                  </h2>
                  <h6 className="font-semibold">clients</h6>
                </div>
                {/* item 02 */}
                <div className="number-item">
                  <h2 className="value">
                    {" "}
                    <ScrollCounter2 />
                  </h2>
                  <h6 className="font-semibold">Products Delivered</h6>
                </div>
                {/* item 03 */}
                <div className="number-item">
                  <h2 className="value">
                    {" "}
                    <ScrollCounter3 />
                  </h2>
                  <h6 className="font-semibold">Revenue</h6>
                </div>
                {/* item 04 */}
                <div className="number-item">
                  <h2 className="value">
                    {" "}
                    <ScrollCounter4 />
                  </h2>
                  <h6 className="font-semibold">clients</h6>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fivemm;
