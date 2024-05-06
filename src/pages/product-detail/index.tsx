import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="relative  mt-[100px]">
        <img
          src="assets/images/a.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
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
                  75 * 300mm
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
              backgroundImage: 'url("assets/images/a.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("assets/images/b.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("assets/images/a.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("assets/images/b.jpg")',
            }}
          />
          <div
            className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow"
            style={{
              backgroundImage: 'url("assets/images/a.jpg")',
            }}
          />
        </div>
      </div>
      <div className="row !p-0 my-[100px] tab-mob">
        <div className="col-lg-12 ">
          <div id="tabs">
            <input type="radio" id="button-1" name="tab" defaultChecked />
            <input type="radio" id="button-2" name="tab" />

            <ul>
              <li>
                <label htmlFor="button-1" className="spec-btn">
                  {" "}
                  Technical Specification
                </label>
              </li>
              <li>
                <label htmlFor="button-2" className="spec-btn">
                  Packaging Details
                </label>
              </li>

              <li className="bg" />
            </ul>
            <div id="shadow">
              <div id="content">
                <div id="tab-1">
                  <div className="left">
                    <div className="bg-white ">
                      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl"></h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Bending and Breaking strenght Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Stain Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Thermal Shock Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Frost and Fire Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Slip Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                          {/* logo - start */}
                          <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                            <label className="text-[20px]">
                              Water Absorption Resistant
                            </label>
                          </div>
                          {/* logo - end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2">
                  <div className="left">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="text-uppercase">Size</th>
                          <th className="text-uppercase">Tiles / Box</th>
                          <th className="text-uppercase">Box / Pallet</th>
                          <th className="text-uppercase">Coverage Area</th>
                          <th className="text-uppercase">
                            Pallet / Containers
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>75x300mm</td>
                          <td>44pcs</td>
                          <td>90</td>
                          <td>1 Box : 099 SQ. MTR</td>
                          <td>1 Containers = 22 Pallet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
                <img
                  src="/assets/images/Floor-Tiles-Icon.png"
                  alt="Floor Tiles"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant <a href="/tiles/floor-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Wall-Tiles-Icon.png"
                  alt="Wall Tiles"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant <a href="/tiles/wall-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Bathroom-Tiles-Icon.png"
                  alt="Bathroom Tiles"
                />
              </div>
              <div className="area-txt">
                Bending And Breaking Resistant
                <a href="/tiles/bathroom-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Kitchen-Tiles-Icon.png"
                  alt="Kitchen Tiles"
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
                <img
                  src="/assets/images/Floor-Tiles-Icon.png"
                  alt="Floor Tiles"
                />
              </div>
              <div className="area-txt">
                Floor Tiles <a href="/tiles/floor-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Wall-Tiles-Icon.png"
                  alt="Wall Tiles"
                />
              </div>
              <div className="area-txt">
                Wall Tiles <a href="/tiles/wall-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Bathroom-Tiles-Icon.png"
                  alt="Bathroom Tiles"
                />
              </div>
              <div className="area-txt">
                Bathroom Tiles <a href="/tiles/bathroom-tiles"></a>
              </div>
            </div>
            <div className="area-col items-center flex flex-col">
              <div className="area-thumb">
                <img
                  src="/assets/images/Kitchen-Tiles-Icon.png"
                  alt="Kitchen Tiles"
                />
              </div>
              <div className="area-txt">
                Kitchen Tiles <a href="/tiles/kitchen-tiles"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row !p-0 mb-[100px]">
        <div className="col-lg-12 ">
          <section className=" flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img relative fixed-bg mt-10">
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
            <p className="mt-1 text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl text-center mt-[100px] mb-[10px]">
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
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Active Users
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  12,345
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Transactions Today
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  1.23M
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Total Revenue
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  $5.6B
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Happy Customers
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  98%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
