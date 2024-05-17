import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router"; // Import useRouter from Next.js
import Image from "next/image";

function Header() {
  const router = useRouter(); // Initialize Next.js router
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked on mobile
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`header-area header-sticky ${menuOpen ? "active" : ""}`}
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
                {/* ***** Logo Start ***** */}
                <Link href="/" passHref className="logo">
                  {/* <h4>
                    Flowless <span>International</span>
                  </h4> */}
                  <div className="h-[100px] max-w-[150px] flex items-center">
                  <Image src="/assets/images/logo.jpg" className="object-contain" alt="logo" height={100} width={100} loading="lazy"/>
                  </div>
                </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className={`nav ${menuOpen ? "active" : ""}`}>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/" ? "active" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/company" ? "active" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/company">Company</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/products" ? "active" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/products">Products</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/faq" ? "active" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/blogs" ? "active" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li
                    className={`scroll-to-section ${
                      router.pathname === "/contact" ? "active" : ""
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
