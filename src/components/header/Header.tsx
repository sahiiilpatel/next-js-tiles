import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router"; // Import useRouter from Next.js

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
            <a href="#" className="mx-2">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              +1 (747) 222-9167
            </a>{" "}
            |
            <a href="#">
              <i className="far fa-envelope" aria-hidden="true" />
              info@amazing-flooring.com
            </a>{" "}
            |
            <a href="#">
              <i className="far fa-envelope" aria-hidden="true" />
              order@amazing-flooring.com
            </a>
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <Link href="/" passHref className="logo">
                  <h4>
                    Amazing<span>Flooring</span>
                  </h4>
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
                  {/* <li className={`scroll-to-section ${router.pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link href="#portfolio">Collection</Link>
                  </li> */}
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
                    <div className="main-red-button">
                      <Link href="/contact">Contact Now</Link>
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
