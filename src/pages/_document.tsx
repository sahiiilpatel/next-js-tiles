import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <link rel="apple-touch-icon" href="../assets/img/apple-icon.png" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../assets/img/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="../vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <script src="https://cdn.tailwindcss.com" async></script>
        <link rel="stylesheet" href="../assets/css/fontawesome.css" />
        <link rel="stylesheet" href="../assets/css/style.css" />
        <link rel="stylesheet" href="../assets/css/animated.css" />
        <link rel="stylesheet" href="../assets/css/owl.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          async
        ></script>

        <script src="../vendor/jquery/jquery.min.js" async></script>
        <script
          src="../vendor/bootstrap/js/bootstrap.bundle.min.js"
          async
        ></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          async
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>

        {/* <script src="../assets/js/owl-carousel.js" async></script> */}
        <script src="../assets/js/animation.js" async></script>
        <script src="../assets/js/imagesloaded.js" async></script>
        <script
          src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"
          async
        ></script>
        <script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          async
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <script src="../assets/js/templatemo-custom.js" async></script>
      </Head>
      <body>
        {/* <FloatingSlider /> */}
        <Main />

        {/* <div id="cretx_popup" style={{ zIndex: "99999!important" }}>
          <div
            id="carouselExampleControls"
            className="slide chatbox-open"
            data-ride="carousel"
            data-interval="450"
          >
            <div className="swiper mySwiper7">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/assets/images/whatsapp.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/facebook.png" />
                </div>
                <div className="swiper-slide">
                  <img src="cimages/instagram.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/linkedin.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/mail.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/call.png" />
                </div>
              </div>
            </div>
          </div>
          <button className="chatbox-close">
            <i className="fa fa-close fa-2x mt-2" aria-hidden="true"></i>
          </button>
          <section className="chatbox-popup">
            <main className="chatbox-popup__main">
              <div className="social">
                <a href="#">
                  <img src="/assets/images/whatsapp.png" />
                  <p>Whatsapp</p>
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src="/assets/images/instagram.png" />
                  <p>Instagram</p>
                </a>
              </div>

              <div className="social">
                <a href="#">
                  <img src="/assets/images/facebook.png" />
                  <p>Facebook</p>
                </a>
              </div>
              <div className="social">
                <a href="maitlo:info@test.com">
                  <img src="/assets/images/mail.png" />
                  <p>Mail</p>
                </a>
              </div>

              <div className="social">
                <a href="#">
                  <img src="/assets/images/linkedin.png" />
                  <p>Linkedin</p>
                </a>
              </div>
              <div className="social">
                <a href="telto:+1 (000) 000-0000">
                  <img src="/assets/images/call.png" />
                  <p>Call</p>
                </a>
              </div>
            </main>
          </section>
        </div> */}
        <div
          id="cretx_popup"
          style={{
            zIndex:
              "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 !important",
          }}
        >
          <div
            id="carouselExampleControls"
            className="slide chatbox-open"
            data-ride="carousel"
            data-interval={450}
          >
            <div className="swiper mySwiper7">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/assets/images/whatsapp.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/instagram.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/facebook.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/linkedin.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/mail.png" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/call.png" />
                </div>
              </div>
            </div>
          </div>
          <button className="chatbox-close">
            <i className="fa fa-close fa-2x mt-2" aria-hidden="true" />
          </button>
          <section className="chatbox-popup">
            <main className="chatbox-popup__main">
              <div className="social">
                <a href="https://api.whatsapp.com/send/?phone=16613322343&text&type=phone_number&app_absent=0">
                  <img src="/assets/images/whatsapp.png" />
                  <p>Whatsapp</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.instagram.com/amazing.flooring/">
                  <img src="/assets/images/instagram.png" />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/amazingflooringtile">
                  <img src="/assets/images/facebook.png" />
                  <p>Facebook</p>
                </a>
              </div>
              <div className="social">
                <a href="maitlo:info@amazing-flooring.com">
                  <img src="/assets/images/mail.png" />
                  <p>Mail</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/amazingflooring/">
                  <img src="/assets/images/linkedin.png" />
                  <p>Linkedin</p>
                </a>
              </div>
              <div className="social">
                <a href="telto:+1 (661) 332-2343">
                  <img src="/assets/images/call.png" />
                  <p>Call</p>
                </a>
              </div>
            </main>
          </section>
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
