import Loader from "@/components/Loader";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";

function handleDownload() {
  const pdfFilePath = "/assets/pdf/Catalogue_sample.pdf";

  const link = document.createElement("a");
  link.href = pdfFilePath;
  link.download = "Catalogue_sample.pdf";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}

const Company = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="relative  mt-[100px]">
            <img
              src="assets/images/company.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt="alt"
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
                      Our Company
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:px-20  mt-[100px] relative">
            <svg
              className="absolute left-0 bottom-0 top-0 z-0 opacity-5"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 "
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
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
                <span className="relative">Flowless International.</span>
              </span>
            </p>
            <br />
            <div className="p-4 text-gray-600 text-md sm:text-left md:text-left font-sans">
              <b style={{ fontSize: "22px" }}>
                {" "}
                • At Flowless International, we pride ourselves on our :
              </b>
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              <b>Excellence in Quality:</b> Our products undergo rigorous quality
              control measures to ensure that each tile and stone meets the highest
              standards of durability, aesthetics, and performance.
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              <b>Diverse Selection:</b> Explore our extensive catalog featuring a
              wide range of designs, colors, and finishes, allowing you to find the
              perfect solution for any project, whether it&apos;s residential,
              commercial, or industrial.
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              <b>Innovation and Technology:</b> We leverage the latest advancements
              in manufacturing technology and design innovation to stay at the
              forefront of the industry, offering cutting-edge products that meet
              the evolving needs of our clients.
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              <b>Global Reach:</b> With a strong network of distributors and
              partners worldwide, we are able to serve clients in various markets,
              providing timely delivery and excellent customer service wherever you
              are located.
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              <b>Sustainability:</b> We are committed to environmentally responsible
              practices throughout our production process, from sourcing materials
              to reducing waste and energy consumption, ensuring that our products
              have minimal impact on the planet.
            </div>
            <div className="p-2 text-gray-600 text-md sm:text-left md:text-left  font-sans">
              Discover the difference with Flowless International and experience the
              finest in premium tiles and natural stones for your projects.
            </div>
          </div>
          <div className="wrapper bg-[#00000010] p-5 my-[100px]">
            <div className="company-hover">
              <div className="row gx-5">
                <div className="col-md-8 d-flex align-items-center ">
                  <div className="text-wrapper">
                    <h6 className="text-uppercase text-lg">
                      DOWNLOAD LATEST COLLECTION’S CATALOGUE from Flowless
                      International
                    </h6>
                    <p className="mt-4">
                      Experience the unparalleled elegance and versatility of
                      Flowless International&apos;s premium tile and stone
                      collections by downloading our comprehensive catalogue today.
                    </p>
                    <div className="mt-[30px] tempcolor">
                      <button onClick={handleDownload}>Download Catalogue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Company;
