import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`header-area header-sticky z-10 ${menuOpen ? "active" : ""}`}
      >
        <div className="head-line">
          <p className="text-center p-3">
            To Speak with us Email or Call at{" "}
            <a href="tel:+91 757-308-8222" className="mx-2">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              +91 (757) 308-8222
            </a>{" "}
            |
            <a href="mailto:info@flowless.co.in">
              <i className="far fa-envelope" aria-hidden="true" />
              info@flowless.co.in
            </a>{" "}
            |
            <a href="mailto:export@flowless.co.in">
              <i className="far fa-envelope" aria-hidden="true" />
              export@flowless.co.in
            </a>
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href="/" passHref className="logo">
                  <div className="h-[100px] max-w-[280px] flex items-center overflow-hidden">
                    <img
                      src="/assets/images/logo.svg"
                      alt="logo"
                      width={150}
                      height={100}
                      loading="eager"
                    />
                  </div>
                </Link>
                <ul className={`nav ${menuOpen ? "active" : ""}`}>
                  <li
                    className={`scroll-to-section ${router.pathname === "/" ? "active" : ""
                      }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${router.pathname === "/company" ? "active" : ""
                      }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/company">Company</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${/^\/(products|ceramic|mosaic|porcelain|subway|slim)(\/|$)/.test(router.pathname) ? "active" : ""
                      }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/products">Products</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${router.pathname === "/faq" ? "active" : ""
                      }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${/^\/(blogs|blog-detail)(\/|$)/.test(router.pathname) ? "active" : ""
                  }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${router.pathname === "/contact" ? "active" : ""
                      }`}
                    onClick={handleLinkClick}
                  >
                    <div className="main-red-button ">
                      <Link href="/contact" className="white">
                        Contact Now
                      </Link>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger" onClick={handleMenuToggle}>
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
