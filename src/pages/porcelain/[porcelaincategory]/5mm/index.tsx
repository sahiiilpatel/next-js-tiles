import Footer from "@/components/footer/Footer";
import React, { useState } from "react";
import ScrollCounter from "@/components/Counter";
import ScrollCounter2 from "@/components/Counter2";
import ScrollCounter3 from "@/components/Counter3";
import ScrollCounter4 from "@/components/Counter4";
import Header from "@/components/header/Header";
import Image from "next/image";
const Fivemm = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const getActiveClass = (index: any, className: any) =>
    ToggleState === index ? className : "";
  return (
    <>
      <Header />
      <div className="relative  mt-[100px]">
        <Image
          src="/assets/images/a.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
          height={"500"}
          width={"500"}
          loading="lazy"
        />
        <div className="relative bg-opacity-50 bg-[#00000095]">
          <svg
            className="absolute inset-x-0 bottom-[-2px] text-white"
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
                  5mm
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
              backgroundImage: 'url("/assets/images/a.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("/assets/images/b.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("/assets/images/a.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("/assets/images/b.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("/assets/images/a.jpg")',
            }}
          />
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-center">
        <div className="flex w-5/6 h-[800px] gap-4 image-slide py-20">
          <div
            className="slide relative !flex-auto bg-cover bg-center !transition-all !duration-500 !ease-in-out !hover:flex-grow"
            style={{
              backgroundImage: 'url("/assets/images/a.jpg")',
            }}
          />
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-center">
        <div className="w-5/6 h-[500px] gap-4 col-lg-12">
          <div className={`active-content`}>
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold">CATEGORY </td>
                  <td>Mosaic</td>
                </tr>
                <tr>
                  <td className="font-semibold">APPLICATIONS</td>
                  <td>
                    Commercial Buildings, Hotel, School, Colleges, Residentials,
                    Hospital, Airport, Industry, Mall, Religious Place,
                    Gymnasium
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">FINISH</td>
                  <td>Matt</td>
                </tr>
                <tr>
                  <td className="font-semibold">CHIP SIZE</td>
                  <td>19mm</td>
                </tr>
                <tr>
                  <td className="font-semibold">PER BOX COVERAGE AREA</td>
                  <td>1.840 SQ.M | SQ. FT : 19.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row !p-0 my-[30px] tab-mob">
        <div className="col-lg-12 ">
          <div className="container container-tab">
            <ul className="tab-list">
              <li
                className={`tabs ${getActiveClass(1, "active-tabs")}`}
                onClick={() => toggleTab(1)}
              >
                Specification
              </li>
              <li
                className={`tabs ${getActiveClass(2, "active-tabs")}`}
                onClick={() => toggleTab(2)}
              >
                Packaging Details
              </li>
            </ul>
            <div className="content-container">
              <div
                className={`content ${getActiveClass(1, "active-content ")}`}
              >
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
              <div className={`content ${getActiveClass(2, "active-content")}`}>
                <table>
                  <tbody>
                    <tr>
                      <td className="font-semibold">Size </td>
                      <td>75x300mm</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Tiles / Box</td>
                      <td>44pcs</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Box / Pallet</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Coverage Area</td>
                      <td>1 Box : 099 SQ. MTR</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Pallet / Containers</td>
                      <td>1 Containers = 22 Pallet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="area-wrap justify-center my-[100px] ">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div className="service-sec">
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <Image
                  src="/assets/images/Floor-Tiles-Icon.png"
                  alt="Floor Tiles"
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
                  height={"500"}
                  width={"500"}
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
      <div className="row !p-0 mb-[100px] detail-parallax">
        <div className="col-lg-12 ">
          <section className=" flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img relative fixed-bg ">
            <div className="parallax-inner parallax-inner2 absolute left-[25%] top-[40%] translate transform">
              We encourage our customers to look at our designer tile
              collections, play with the colours and patterns, and come up with
              unique handmade tile selections.
            </div>
          </section>
        </div>
      </div>
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
                <span className="relative">Amazing Flooring</span>
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
