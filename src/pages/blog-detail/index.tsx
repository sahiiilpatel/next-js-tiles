import Catalogue from "@/components/Catalogue";
import Loader from "@/components/Loader";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";

const Blogetail = () => {
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
              src="assets/images/a.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt="image"
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
                      Blog Detail
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-4 py-10 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-4xl">
              <div className="mt-3 bg-white rounded-lg shadow-lg p-6">
                <div className="bg-[#f8f8f8] p-6 rounded-t-lg">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
                  >
                    Election
                  </a>
                  <h1 className="text-gray-900 font-bold text-4xl">
                    Portrait Photography In Early Days
                  </h1>
                  <div className="py-5 text-sm font-regular text-gray-900 flex">
                    <span className="mr-3 flex flex-row items-center">
                      <svg
                        className="text-indigo-600"
                        fill="currentColor"
                        height="13px"
                        width="13px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                            />
                          </g>
                        </g>
                      </svg>
                      <span className="ml-1">6 mins ago</span>
                    </span>
                    <a
                      href="#"
                      className="flex flex-row items-center hover:text-indigo-600  mr-3"
                    >
                      <svg
                        className="text-indigo-600"
                        fill="currentColor"
                        height="16px"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        ></path>
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                      <span className="ml-1">AliSher Azimi</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center hover:text-indigo-600"
                    >
                      <svg
                        className="text-indigo-600"
                        fill="currentColor"
                        height="16px"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill=""
                          d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                        ></path>
                      </svg>
                      <span className="ml-1">activewear</span>
                    </a>
                  </div>
                  <hr />
                  <p className="text-base leading-8 my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                  </p>
                  <h3 className="text-2xl font-bold my-5">
                    #1. What is Lorem Ipsum?
                  </h3>
                  <p className="text-base leading-8 my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                  </p>
                  <blockquote className="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text
                    ever since the 1500s
                  </blockquote>
                  <p className="text-base leading-8 my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                  </p>
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #Election
                  </a>
                  ,
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #people
                  </a>
                  ,
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #Election2020
                  </a>
                  ,
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #trump
                  </a>
                  ,
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #Joe
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Catalogue />
          <Footer />
        </>
      )}

    </>
  );
};

export default Blogetail;
