import Footer from "@/components/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { subwayTilesData } from "@/data/FilterableData";
import Image from "next/image";
import { useRouter } from "next/router";

const Fivemm = () => {
  const [ToggleState, setToggleState] = useState(1);
  const [tileData, setDataTwo] = useState<any>(null);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const getActiveClass = (index: any, className: any) =>
    ToggleState === index ? className : "";

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
  }, [tile]);

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
      <div className="relative mt-[100px]">
        <Image
          src={tileData.main_img ? tileData.main_img : "/assets/images/a.jpg"}
          className="absolute inset-0 object-cover w-full h-full"
          alt="alt"
          height={500}
          width={500}
          loading="lazy"
        />
        <div className="relative bg-opacity-50 bg-[#00000095]">
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
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none min-h-[300px] flex justify-start items-end">
                  {tile}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-heading text-center mt-[100px] mb-[100px]">
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
              className="slide relative !flex-auto bg-cover bg-center !transition-all !duration-500 !ease-in-out !hover:flex-grow"
              style={{
                background: `url(${tileData.main_img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
          </div>
        </div>
      )}

      <div className="flex w-full h-full items-center justify-center py-5">
        <div className="w-5/6 h-[500px] gap-4 col-lg-12">
          <div className={`active-content`}>
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold">CATEGORY </td>
                  <td>{tileData.main_table.CATEGORY}</td>
                </tr>
                <tr>
                  <td className="font-semibold">APPLICATIONS</td>
                  <td>{tileData.main_table.APPLICATIONS}</td>
                </tr>
                <tr>
                  <td className="font-semibold">FINISH</td>
                  <td>{tileData.main_table.FINISH}</td>
                </tr>
                <tr>
                  <td className="font-semibold">CHIP SIZE</td>
                  <td>{tileData.main_table.CHIP_SIZE}</td>
                </tr>
                <tr>
                  <td className="font-semibold">PER BOX COVERAGE AREA</td>
                  <td>{tileData.main_table.PER_BOX_COVERAGE_AREA}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row !p-0 my-[30px] tab-mob">
        <div className="col-lg-12">
          <div className="container container-tab">
            <ul className="tab-list">
              <li
                className={`tabs ${getActiveClass(1, "active-tabs")} ${!tileData.Packaging_table ? "w-full" : ""
                  }`}
                onClick={() => toggleTab(1)}
              >
                Specification
              </li>
              {tileData.Packaging_table && (
                <li
                  className={`tabs ${getActiveClass(2, "active-tabs")}`}
                  onClick={() => toggleTab(2)}
                >
                  Packaging Details
                </li>
              )}
            </ul>
            <div className="content-container">
              <div className={`content ${getActiveClass(1, "active-content")}`}>
                <div className="container mx-auto">
                  <div className="md:flex-1 px-4">
                    <p className="text-gray-500">
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
                  className={`content ${getActiveClass(2, "active-content")}`}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td className="font-semibold">Coverage / Box</td>
                        <td>{tileData.Packaging_table.Coverage_Box}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Weight / Box</td>
                        <td>{tileData.Packaging_table.Weight_Box}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Boxes / Pallet</td>
                        <td>{tileData.Packaging_table.Boxes_Pallet}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Pallets / Container</td>
                        <td>{tileData.Packaging_table.Pallets_Container}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Boxes / Container</td>
                        <td>{tileData.Packaging_table.Boxes_Container}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fivemm;