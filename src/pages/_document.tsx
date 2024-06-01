import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <link rel="apple-touch-icon" href="/assets/img/apple-icon.png" />
        <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <script src="/vendor/jquery/jquery.min.js" async></script>
        <script src="/assets/js/animation.js" async></script>
        <script src="/assets/js/imagesloaded.js" async></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" async ></script>
        <script src="https://cdn.tailwindcss.com" async></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" async ></script>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js" async ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" async type="module"></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" async ></script>
        <script src="/assets/js/templatemo-custom.js" async></script>
      </Head>
      <body className="bg-[#f8f8f8]">
        {/* <FloatingSlider /> */}
        <Main />
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
                  <img src="/assets/images/whatsapp.png" alt="WhatsApp logo" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/instagram.png" alt="instagram logo" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/facebook.png" alt="facebook logo" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/linkedin.png" alt="linkedin logo" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/mail.png" alt="mail logo" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/images/call.png" alt="call logo" />
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
                <a href="whatsapp://send?phone=+917573088222">
                  <img src="/assets/images/whatsapp.png" alt="WhatsApp Icon" />
                  <p>Whatsapp</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.instagram.com/flowlessinternational?igsh=dmFuOHV1d2Vsamlz&utm_source=qr">
                  <img src="/assets/images/instagram.png" alt="instagram logo" />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/people/Flowless-International-LLP/61559670771720/">
                  <img src="/assets/images/facebook.png" alt="facebook logo" />
                  <p>Facebook</p>
                </a>
              </div>
              <div className="social">
                <a href="mailto:info@flowless.co.in">
                  <img src="/assets/images/mail.png" alt="mail logo" />
                  <p>Mail</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/flowless-international-llp/">
                  <img src="/assets/images/linkedin.png" alt="linkedin logo" />
                  <p>Linkedin</p>
                </a>
              </div>
              <div className="social">
                <a href="tel:+91 757-308-8222">
                  <img src="/assets/images/call.png" alt="call logo" />
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
