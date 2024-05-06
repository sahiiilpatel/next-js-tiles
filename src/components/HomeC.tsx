import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Counter from "./Counter";
import ScrollCounter4 from "./Counter4";
import ScrollCounter2 from "./Counter2";
import ScrollCounter3 from "./Counter3";
import Image from "next/image";

const Homec = () => {
  return (
    <div>
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <h6>Welcome to Amazing Tiles</h6>
                    <h2>
                      Beautiful,
                      <em>Today</em> &amp; <span>Forever</span>
                    </h2>
                    <p className="text-[18px]">
                      As Link leading flooring company, Amazing is proud to
                      offer you high-quality tile solutions to enhance your home
                      decor.
                    </p>
                    <p className="text-[18px]">
                      From architects and designers to contractors, builders,
                      and retailers, we proudly support trade businesses; we are
                      here for you. With Amazing Flooring, create Link beautiful
                      world, one tile at Link time. From architects and
                      designers to contractors, builders, and retailers, we
                      proudly support trade businesses; we are here for you.
                      With Amazing Flooring, create Link beautiful world, one
                      tile at Link time.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/assets/images/banner-right-image.jpg"
                      alt="team meeting"
                      height={"500"}
                      width={"500"}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row !p-0">
        <div className="col-lg-12 ">
          <section className=" flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img relative fixed-bg mt-10 fixed-bg">
            <div className="parallax-inner absolute left-[20px] top-[50px] parallax-items item-1">
              We encourage our customers to look at our designer tile
              collections, play with the colours and patterns, and come up with
              unique handmade tile selections.
            </div>
            <div className="parallax-inner parallax-inner2 absolute left-[20%] top-[40%] translate transform parallax-items item-2">
              We encourage our customers to look at our designer tile
              collections, play with the colours and patterns, and come up with
              unique handmade tile selections.
            </div>
            <div className="parallax-inner parallax-inner3 absolute right-[50px] bottom-[50px] translate transform parallax-items item-3">
              We encourage our customers to look at our designer tile
              collections, play with the colours and patterns, and come up with
              unique handmade tile selections.
            </div>
          </section>
        </div>
      </div>

      <div id="portfolio" className="our-portfolio section relative vector">
        <svg
          className="absolute left-[100px] bottom-0 -translate-x-1/2 transform hide opacity-50"
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
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading  wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h2>
                  See What Our Agency <em>Offers</em> &amp; What We{" "}
                  <span>Provide</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <Link href="/glossy">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="hidden-content">
                    <h4>Mosaic Tiles</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <Image src="/assets/images/1.jpg" alt="img" height={500} width={500} loading="lazy"/>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/matt">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="hidden-content">
                    <h4>Matt Tiles</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <Image src="/assets/images/2.jpg" alt="img" height={"500"} width={"500"} loading="lazy"/>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/rustic">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="hidden-content">
                    <h4>Rustic</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <Image src="/assets/images/3.jpg" alt="img" height={"500"} width={"500"} loading="lazy" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/wooden">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="hidden-content">
                    <h4>Wooden Tiles</h4>
                    <p>
                      Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.
                    </p>
                  </div>
                  <div className="showed-content">
                    <Image src="/assets/images/4.jpg" alt="img" height={"500"} width={"500"} loading="lazy"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section
        className="w-full flex relative  wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        {/* <div className="max-w-7xl mx-auto  px-4 pb-[100px] sm:px-6 lg:px-8 z-[10]">
          <div className="text-center space-y-5">
            <div className="inline-flex items-end justify-center w-full text-center mx-auto">
              <img
                src="assets/images/1.jpg"
                className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
              />
              <img
                src="assets/images/2.jpg"
                className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
              />
              <img
                src="assets/images/3.jpg"
                className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
              />
              <img
                src="assets/images/4.jpg"
                className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
              />
              <img
                src="assets/images/1.jpg"
                className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
              />
            </div>
            <p className="mt-1 text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl">
              Discover
              <span className="px-2 py-1 relative inline-block">
                <svg
                  className="stroke-current bottom-0 absolute text-blue-300 -translate-x-2"
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
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
              Take Link peek at our luxurious yet affordable lifestyle solutions
              for walls and floor tiles. Find your design inspiration with us!
              Our flooring store is here to spruce up your space, be it the
              kitchen, living room, office space, or cafe.
            </p>
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
              A fantastic collection of high-quality tiles proves our commitment
              to quality and reliability if you are Link vendor looking for Link
              reliable tile supplier.
            </p>
          </div>
        </div> */}
      </section>
      <div id="about" className="about-us company-hover section h-screen">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="left-image wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <Image
                  src="/assets/images/about-left-image.svg"
                  alt="person graphic" 
                  height={"500"} 
                  width={"500"} 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-center ">
              <div className="services">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <div className="right-text">
                        <h4>WHY AMAZING FLOORING?</h4>
                        <p>
                          Bringing architectural ideas to life, Amazing Flooring
                          always offers the perfect blend of beauty and
                          functionality in the form of floor and wall tiles. As
                          the tile supplier in the US and Canada, our team takes
                          pride in bringing you the newest designs and unseen
                          visions in every collection. With superior quality and
                          Link vast collection of tiles in numerous sizes and
                          designs, Amazing Flooring has brought the ideas of
                          countless architects, designers, stylists, and
                          homeowners to life. Our products have Link wide range
                          of applications, residential and commercial like
                          hotels, airports, restrooms, hospitals, and more. We
                          believe in delivering tiles that stand the test of
                          time and surpass all the expectations of quality and
                          functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <p className="text-4xl font-extrabold text-gray-900   sm:text-5xl sm:tracking-tight lg:text-6xl text-center mt-[100px] mb-[10px]">
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
        <div className="section-heading text-center mb-[50px] ">
          <h2>
            See What Our Agency <em>Offers</em> &amp; What We{" "}
            <span>Provide</span>
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-11/12 bg-slate-100 p-5 md:p-20 rounded-2xl shadow-lg home-cards">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <figure className="col-span-2 relative group overflow-hidden max-h-[270px] min-h-[370px]">
                <Link
                  href="/mosaic"
                  className="relative w-full flex items-center"
                >
                  <Image
                    src="/assets/images/11.jpg"
                    alt="img"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-full group-hover:scale-105 group transition-all duration-200"
                  />
                </Link>
                <figcaption className="flex w-full p-3 absolute  left-0 bg-slate-900/60 !text-white justify-between items-center  bottom-0 hover:visible transition-all duration-200">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold !text-white">
                    Mosaic Tiles
                    </p>
                  </div>
                </figcaption>
              </figure>
              <figure className="col-span-2 relative group overflow-hidden max-h-[270px] min-h-[370px]">
                <Link href="/slim" className="">
                  <Image
                    src="/assets/images/22.jpg"
                    alt="img"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-full group-hover:scale-105 group transition-all duration-200"
                  />
                </Link>
                <figcaption className="flex w-full p-3 absolute  left-0 bg-slate-900/60 !text-white justify-between items-center  bottom-0 hover:visible transition-all duration-200">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold !text-white">
                    Slim Tiles
                    </p>
                  </div>
                </figcaption>
              </figure>
              <figure className="col-span-2 relative group overflow-hidden max-h-[270px] min-h-[370px]">
                <Link href="/ceramic" className="">
                  <Image
                    src="/assets/images/33.jpg"
                    alt="img"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-full group-hover:scale-105 group transition-all duration-200"
                  />
                </Link>
                <figcaption className="flex w-full p-3 absolute  left-0 bg-slate-900/60 !text-white justify-between items-center  bottom-0 hover:visible transition-all duration-200">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold !text-white">
                    Ceramic Tiles
                    </p>
                  </div>
                </figcaption>
              </figure>
              <figure className="col-span-2 relative group overflow-hidden max-h-[270px] min-h-[370px]">
                <Link href="/porcelain" className="">
                  <Image
                    src="/assets/images/44.jpg"
                    alt="img"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-full group-hover:scale-105 group transition-all duration-200"
                  />
                </Link>
                <figcaption className="flex w-full p-3 absolute  left-0 bg-slate-900/60 !text-white justify-between items-center  bottom-0 hover:visible transition-all duration-200">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold !text-white">
                    Porcelain Tiles
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section-4 py-[100px] mt-[100px] bg-[#00000010]">
        <div className="bg-color">
          <div className="wrapper container">
            <div className="row justify-content-center text-wrapper">
              <div className="col-md-3 col-6 text-center mb-lg-0 mb-4">
                <div>
                  <img
                    src="assets/images/AFFORDABLE.png"
                    alt="Affordable tiles icon"
                  />
                  <p>Affordable tiles</p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center mb-lg-0 mb-4">
                <div>
                  <img
                    src="assets/images/UNMATCHED.png"
                    alt="Unmatched quality icon"
                  />
                  <p>Unmatched quality</p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center mb-lg-0 mb-4">
                <div>
                  <img src="assets/images/24X7.png" alt="24*7 Support icon" />
                  <p>24*7 Support</p>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center mb-md-0 mb-4">
                <div>
                  <img
                    src="assets/images/CERTIFIED.png"
                    alt="Certified Products icon"
                  />
                  <p>Certified Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="bg-gray-100 py-16 mt-[100px] mb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Services
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            {/* Service Box 1 */}
            <div className="text-center">
              <div className="inline-block rounded-full bg-indigo-500 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="white"
                >
                  <path d="M12,20c5.514,0,10-4.486,10-10S17.514,0,12,0,2,4.486,2,10s4.486,10,10,10ZM12,1c4.962,0,9,4.037,9,9s-4.038,9-9,9S3,14.963,3,10,7.038,1,12,1Zm-4,6.626c0-1.448,1.178-2.626,2.626-2.626h.874v-1.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.5h.926c.979,0,1.891,.526,2.381,1.375,.139,.238,.057,.545-.182,.683-.241,.138-.546,.057-.683-.183-.312-.54-.894-.875-1.516-.875h-2.8c-.896,0-1.626,.729-1.626,1.626,0,.803,.575,1.479,1.368,1.604l3.423,.552c1.28,.204,2.209,1.295,2.209,2.592,0,1.448-1.178,2.626-2.626,2.626h-.874v1.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5h-.926c-.979,0-1.891-.526-2.381-1.375-.139-.238-.057-.545,.182-.683,.239-.14,.545-.057,.683,.183,.312,.54,.894,.875,1.516,.875h2.8c.896,0,1.626-.729,1.626-1.626,0-.803-.575-1.479-1.368-1.604l-3.423-.552c-1.28-.204-2.209-1.295-2.209-2.592Zm16,13.374c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3s1.346-3,3-3h.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-.5c-1.103,0-2,.897-2,2s.897,2,2,2H21c1.103,0,2-.897,2-2s-.897-2-2-2h-.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h.5c1.654,0,3,1.346,3,3Z" />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Affordable Tiles
              </p>
              <p className="mt-2 text-base text-gray-500">
                Description of service 1 goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* Service Box 2 */}
            <div className="text-center">
              <div className="inline-block rounded-full bg-indigo-500 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="white"
                >
                  <path d="m16.856,7.851l-4.415,4.481c-.444.444-1.027.667-1.61.667s-1.163-.221-1.606-.664l-2.422-2.485c-.193-.198-.189-.515.009-.707.198-.192.515-.189.707.009l2.417,2.481c.492.491,1.299.492,1.795-.004l4.412-4.479c.193-.197.51-.2.707-.005.197.193.199.51.005.707Zm7.023,12.188c-.246.594-.798.963-1.442.963h-1.439v1.435c0,.644-.37,1.197-.964,1.442-.199.083-.404.123-.606.123-.402,0-.792-.159-1.095-.463l-4.297-4.305c-.165.138-.334.273-.53.381-.468.259-.993.389-1.518.389s-1.05-.13-1.518-.389c-.191-.106-.355-.238-.517-.372l-4.288,4.296c-.302.304-.692.463-1.095.463-.202,0-.407-.04-.606-.122-.595-.246-.965-.799-.965-1.443v-1.435h-1.439c-.643,0-1.195-.369-1.441-.963-.247-.594-.117-1.246.338-1.701l3.55-3.55c.001-.231.014-.461.065-.687.12-.526-.121-1.087-.6-1.396-.449-.289-.813-.683-1.084-1.171-.255-.461-.388-.991-.385-1.534-.003-.537.13-1.066.385-1.527.271-.489.636-.883,1.084-1.172.479-.309.72-.87.6-1.396-.121-.534-.103-1.082.055-1.63.295-1.028,1.118-1.851,2.147-2.146.548-.157,1.095-.175,1.628-.055.525.121,1.087-.122,1.397-.6.289-.448.683-.812,1.171-1.083.938-.519,2.1-.519,3.037,0,.488.271.882.635,1.171,1.083.309.479.872.72,1.397.6.532-.121,1.08-.103,1.627.055,1.029.295,1.852,1.118,2.147,2.146.158.548.176,1.096.055,1.629-.12.526.121,1.087.6,1.396.449.289.813.683,1.084,1.171h0c.255.46.388.99.386,1.532.002.539-.131,1.068-.386,1.528-.271.489-.636.883-1.084,1.172-.479.309-.72.87-.6,1.396.049.218.06.44.063.662l3.575,3.575c.455.455.584,1.106.338,1.701Zm-14.604-1.533c-.312-.459-.862-.692-1.375-.575-.532.121-1.08.103-1.627-.055-.943-.27-1.691-.993-2.041-1.901l-3.07,3.07c-.246.246-.155.53-.122.611.034.081.17.346.518.346h1.939c.276,0,.5.224.5.5v1.935c0,.348.265.485.347.519.081.033.365.124.611-.123l4.319-4.327Zm4.561-.517c.537-.831,1.525-1.243,2.458-1.033.367.084.748.069,1.131-.04.69-.198,1.264-.771,1.461-1.461.11-.385.124-.766.041-1.132-.212-.935.203-1.922,1.033-2.458.309-.199.562-.474.751-.817.172-.311.262-.671.261-1.043.001-.376-.088-.736-.261-1.047-.19-.342-.443-.617-.751-.816-.831-.536-1.246-1.524-1.033-2.458.083-.367.07-.748-.041-1.132-.198-.69-.771-1.264-1.461-1.461-.383-.11-.763-.125-1.131-.04-.931.209-1.922-.203-2.458-1.033-.199-.309-.474-.562-.816-.751-.627-.349-1.439-.348-2.066,0-.342.189-.617.442-.815.751-.537.831-1.525,1.243-2.458,1.033-.367-.084-.748-.07-1.131.04-.69.198-1.264.771-1.461,1.461-.11.385-.124.766-.041,1.132.212.935-.203,1.922-1.033,2.458-.309.199-.562.474-.751.817-.172.311-.262.671-.26,1.042-.002.377.088.738.26,1.049.19.342.443.617.751.816.831.536,1.246,1.524,1.033,2.458-.083.367-.069.748.041,1.132.198.69.771,1.264,1.461,1.461.383.109.763.125,1.131.04.163-.037.327-.055.491-.055.774,0,1.525.402,1.968,1.087.199.309.474.562.816.751.626.349,1.438.348,2.066,0,.343-.19.617-.443.816-.751Zm8.998,1.056l-3.085-3.085c-.346.916-1.099,1.645-2.048,1.917-.547.157-1.095.175-1.628.055-.512-.118-1.05.112-1.364.562l4.331,4.339c.247.247.53.156.611.123.082-.034.347-.17.347-.519v-1.935c0-.276.224-.5.5-.5h1.939c.348,0,.484-.265.518-.346.034-.081.125-.365-.122-.611Z" />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Unmatched quality
              </p>
              <p className="mt-2 text-base text-gray-500">
                Description of service 2 goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* Service Box 3 */}
            <div className="text-center">
              <div className="inline-block rounded-full bg-indigo-500 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="white"
                >
                  <path d="m4,4c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm5,4c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm5,2c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm-7.938,7.398c.287-1.39,1.545-2.398,2.989-2.398s2.7,1.009,2.989,2.398c.057.27-.069.602-.49.602-.231,0-.439-.162-.488-.398-.193-.928-1.039-1.602-2.011-1.602s-1.818.673-2.011,1.602c-.056.271-.324.44-.591.388-.271-.056-.444-.321-.388-.591Zm7.938-3.398c1.444,0,2.702,1.009,2.989,2.398.057.271-.114.611-.49.602-.231-.006-.439-.163-.488-.398-.192-.928-1.038-1.602-2.011-1.602-.28,0-.552.054-.808.161-.251.107-.548-.014-.654-.269-.105-.255.015-.547.27-.654.378-.158.779-.238,1.192-.238ZM1.011,7.398c.287-1.39,1.545-2.398,2.989-2.398.413,0,.814.08,1.192.238.255.106.375.399.27.654-.106.255-.403.375-.654.269-.256-.106-.527-.161-.808-.161-.973,0-1.818.673-2.011,1.602-.049.236-.259.431-.488.398-.405-.058-.547-.331-.49-.602Zm22.17,2.256c-.496-.452-1.141-.674-1.809-.652-.67.032-1.288.322-1.739.818l-3.732,4.102c-.314-1.108-1.335-1.922-2.543-1.922H3.5c-1.93,0-3.5,1.57-3.5,3.5v5c0,1.93,1.57,3.5,3.5,3.5h5.965c2.707,0,5.292-1.159,7.093-3.181l6.806-7.639c.911-1.022.829-2.604-.183-3.526Zm-.563,2.861l-6.806,7.639c-1.611,1.809-3.925,2.846-6.347,2.846H3.5c-1.379,0-2.5-1.122-2.5-2.5v-5c0-1.378,1.121-2.5,2.5-2.5h9.857c.905,0,1.643.737,1.643,1.642,0,.812-.606,1.511-1.398,1.624l-6.161.737c-.274.033-.47.282-.437.556.032.274.282.464.556.437l6.173-.739c1.021-.146,1.844-.878,2.145-1.824l4.496-4.94c.271-.298.643-.473,1.046-.492.398-.018.789.12,1.088.393.609.555.658,1.506.11,2.122Z" />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                24*7 Support
              </p>
              <p className="mt-2 text-base text-gray-500">
                Description of service 3 goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* Service Box 4 */}
            <div className="text-center">
              <div className="inline-block rounded-full bg-indigo-500 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="white"
                >
                  <path d="M20.1,5.39l-3.48-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h3c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5h-3c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v9.51c0,1.25-.67,2.41-1.75,3.03-.24,.14-.32,.44-.18,.68,.14,.24,.45,.32,.68,.18,1.39-.8,2.25-2.3,2.25-3.9V9.99c0-1.74-.68-3.37-1.9-4.6Zm-4.6,2.61c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.48,3.49c.55,.55,.97,1.2,1.24,1.9h-5.13Zm-1,5c-1.93,0-3.5,1.57-3.5,3.5,0,.95,.38,1.82,1,2.45v3.99c0,.43,.26,.82,.66,.99,.13,.05,.27,.08,.41,.08,.28,0,.55-.11,.75-.31l.68-.68,.68,.68c.31,.31,.76,.4,1.16,.23,.4-.17,.66-.55,.66-.99v-3.99c.62-.63,1-1.5,1-2.45,0-1.93-1.57-3.5-3.5-3.5Zm0,1c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Zm1.39,8.98l-1.39-1.39-1.39,1.39-.11-.05v-3.27c.45,.22,.96,.34,1.5,.34s1.05-.12,1.5-.34v3.27l-.11,.05Z" />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Certified Products
              </p>
              <p className="mt-2 text-base text-gray-500">
                Description of service 3 goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="our-services section mb-[100px]">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow flex items-center fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="section-heading">
                <h2>
                  We believe in helping to create Link beautiful<em> today </em>{" "}
                  &amp; <span> tomorrow</span>
                </h2>
                <p className="text-[20px]">
                  From architects and designers to contractors, builders, and
                  retailers, we proudly support trade businesses; we are here
                  for you. With Amazing Flooring, create Link beautiful world,
                  one tile at Link time.
                </p>
                <p className="text-[20px]">
                  Amazing Flooring is setting new benchmarks in the tile world
                  with excellent products and on-point customer service. Our
                  strong vision, dedicated team, expertise, and experience in
                  the tile industry have strengthened our brand presence
                  worldwide.
                </p>{" "}
                <p className="text-[20px]">
                  From time-honored to modern and trending designs, we offer an
                  array of international standard flooring solutions for
                  everyone. Paint the world in different hues, textures,
                  designs, and patterns with us.
                </p>
                <p className="text-[20px]">
                  A fantastic collection of high-quality tiles proves our
                  commitment to quality and reliability if you are Link vendor
                  looking for Link reliable tile supplier.
                </p>
              </div>
              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="first-bar progress-skill-bar">
                    <h4>Website Analysis</h4>
                    <span>84%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="second-bar progress-skill-bar">
                    <h4>SEO Reports</h4>
                    <span>88%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="third-bar progress-skill-bar">
                    <h4>Page Optimizations</h4>
                    <span>94%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homec;
