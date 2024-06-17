import Loader from "@/components/Loader";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: '',
    Surname: '',
    Email: '',
    Message: '',
    title2: 'Contact',
    title1: 'Page'
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully.', {
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
        router.push('/')
      } else {
        toast.error('Failed to send email.', {
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
        router.push('/')
      }
    } catch (error) {
      toast.error('Failed to send email.', {
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
      router.push('/')
    }
  };

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
                      Contact Us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-32 pt-[100px]">
            <div
              id="map"
              className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.135493609593!2d70.8823772!3d22.834476100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598c437ca060e9%3A0x8a15c746f0bd7584!2sOld%20Ghuntu%20Rd%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1716906183727!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                loading="eager"
              ></iframe>
            </div>

            <div className="container px-6 md:px-12">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                    <form className="relative mb-6" onSubmit={handleSubmit} >
                      <div className="relative mb-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="name"
                            name="Name"
                            id="name"
                            placeholder="Name"
                            required
                            value={formData.Name}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="relative mb-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="text"
                            name="Surname"
                            id="Surname"
                            placeholder="Surname"
                            required
                            value={formData.Surname}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="relative mb-6">
                        <fieldset>
                          <input
                            className="form-control"
                            type="text"
                            name="Email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email"
                            required
                            value={formData.Email}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="relative mb-6">
                        <fieldset>
                          <textarea
                            name="Message"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            defaultValue={formData.Message}
                            required
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="tempcolor">
                        <button type="submit" id="form-submit" className="main-button">
                          Send
                        </button>
                      </div>
                    </form>

                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div className="flex flex-wrap">
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-1 font-bold ">Technical support</p>
                            <a
                              href="mailto:info@flowless.co.in"
                              className="text-sm text-neutral-500"
                            >
                              <i className="far fa-envelope " aria-hidden="true" />
                              info@flowless.co.in
                            </a>
                            <ul className="mb-0"></ul>
                            <a
                              href="mailto:export@flowless.co.in"
                              className="text-sm text-neutral-500"
                            >
                              <i className="far fa-envelope " aria-hidden="true" />
                              export@flowless.co.in
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:pr-6 xl:w-6/12">
                        <div className="flex items-start">
                          <div className="srink-0">
                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-7 h-7"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-5 grow">
                            <p className="mb-1 font-bold ">Address</p>
                            <p className="text-sm text-neutral-500">
                              Flowless International LLP, <br />
                              Old Ghuntu Road, <br />
                              Morbi 363 642, <br />
                              Gujarat, India <br />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-1 font-bold ">Mobile</p>
                            <a
                              href="tel:+91 757-308-8222"
                              className="text-sm text-neutral-500"
                            >
                              <i className="fas fa-phone-alt" aria-hidden="true" />
                              +91 (757) 308-8222
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-1 font-bold ">Mobile</p>
                            <a
                              href="tel:+91 756-727-5222"
                              className="text-sm text-neutral-500"
                            >
                              <i className="fas fa-phone-alt" aria-hidden="true" />
                              +91 (756) 727-5222

                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.25s"
                >
                  <p>
                    © Copyright 2024 Flowless International. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Contact;
