import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide, toast } from "react-toastify";

const Footer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: '',
    Surname: '',
    Email: '',
    Message: '',
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
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="flex flex-row">
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="text"
                          name="Name"
                          id="name"
                          placeholder="Name"
                          required
                          value={formData.Name}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                    <div className="ml-1 col-lg-6">
                      <fieldset>
                        <input
                          type="text"
                          name="Surname"
                          id="surname"
                          placeholder="Surname"
                          required
                          value={formData.Surname}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={formData.Email}
                        onChange={handleChange}
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
                        required
                        value={formData.Message}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
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
              <p>
                © Copyright 2024 Flowless International. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
