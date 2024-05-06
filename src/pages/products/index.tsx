import CategoryImageFilter from "@/components/CategoryImageFilter";
import ImageFilter from "@/components/ImageFilterGlossy";
import Header from "@/components/header/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  return (
    <>
      <Header />
      <div className="relative  mt-[100px]">
        <Image
          src="/assets/images/a.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="img"
          width={500}
          height={500}
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
                  PRODUCTS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Header Area End ***** */}

      <CategoryImageFilter />

      {/* <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 align-self-center wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <div className="section-heading">
                <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doer ket eismod tempor incididunt ut labore et dolores
                </p>
                <div className="phone-info">
                  <h4>
                    For any enquiry, Call Us:{" "}
                    <span>
                      <i className="fa fa-phone" />{" "}
                      <Link href="#">010-020-0340</Link>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="surname"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button "
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
                <div className="contact-dec">
                  <img src="assets/images/contact-decoration.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
     
      <footer>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <p>© Copyright 2024 Amazing Flooring. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
