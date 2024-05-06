import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <div id="contact" className="contact-us section">
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
                  <Image src="/assets/images/contact-decoration.png" alt="" height={"500"} width={"500"} loading="lazy"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
};

export default Footer;
