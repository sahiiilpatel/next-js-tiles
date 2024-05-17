import Image from "next/image";
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
                {/* <h2>Feel Free To Send Us a Message About Your Website Needs</h2> */}
                <h2>
                  Choose Flowless International as your trusted partner, and let
                  us help you transform your spaces with premium quality tiles
                  that exceed your expectations.
                </h2>
                <div className="phone-info">
                  <h4>
                    For more enquiry, Call Us:{" "}
                    <span>
                      <i className="fa fa-phone" />{" "}
                      <a href="tel:+91 757-308-8222">+91 757-308-8222</a>
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
              <form id="contact" action="https://formsubmit.co/info@flowless.co.in" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="name"
                        name="Name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="surname"
                        name="Surname"
                        id="surname"
                        placeholder="Surname"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="Email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="Message"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        defaultValue={""}
                        required
                      />
                    </fieldset>
                  </div>
                  <input type="hidden" name="_template" value="table"></input>
                  <input type="hidden" name="_next" value="https://flowless.co.in/"></input>
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
                  <Image
                    src="/assets/images/contact-decoration.png"
                    alt="alt"
                    height={"500"}
                    width={"500"}
                    loading="lazy"
                  />
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
              <p>© Copyright 2024 Flowless International. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
