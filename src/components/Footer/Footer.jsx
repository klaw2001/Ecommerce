import React from "react";
import { useState } from "react";

const SocialLink = ({ iconClass }) => (
  <a href="#" className="text-decoration-none text-center icons">
    <i className={iconClass}></i>
  </a>
);

const ContactInfo = ({ iconClass, text }) => (
  <div className="singlelist d-flex">
    <i className={iconClass + " me-3"}></i>
    <a href="#" className="text-decoration-none contact_text">
      <p>{text}</p>
    </a>
  </div>
);

const FooterColumn = ({ title, colLg, children }) => (
  <div className={`${colLg} col-sm-3 col-6 mt-4`}>
    <div className="footerinfo">
      <h4>{title}</h4>
      <ul className="pt-4 list-unstyled">{children}</ul>
    </div>
  </div>
);

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <footer className="footerbg py-5">
        <div className="container p-0">
          <div className="row mb-5 w-100">
            <div className="col-lg-5">
              <div className="mt-4">
                <div className="footernews">
                  <h3>LET'S KEEP IN TOUCH</h3>
                  <p className="m-0">
                    Sign up for our e-mail to get the latest news.
                  </p>
                  <form
                  action="#"
                  className="d-flex align-items-center position-relative mt-5"
                >
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Enter your email address"
                    style={{ height: "50px", width: "70%" }}
                  />

                  <button
                    className="global-btn rounded-pill border-0"
                    style={{ position: "absolute", right: "160px" }}
                  >
                    Sign Up
                  </button>
                </form>
                </div>
              </div>
            </div>

            <FooterColumn colLg="col-lg-3" title="ABOUT US">
              <p className="mb-0 abttext">M-F 9am-5pm EST</p>
              <ContactInfo
                iconClass="bi bi-geo-alt"
                text="Fox Mountain Rd, South Fork, CO 81154, USA"
              />
              <ContactInfo iconClass="bi bi-telephone" text="+0123.456.8386" />
              <ContactInfo
                iconClass="bi bi-envelope"
                text="support@example.com"
              />
            </FooterColumn>

            <FooterColumn colLg="col-lg-2" title="INFORMATION">
              <li className="listtext">
                <a href="#" className="text-decoration-none">
                  Legal Notice
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  Sitemap
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  Stores
                </a>
              </li>
            </FooterColumn>

            <FooterColumn colLg="col-lg-2" title="CUSTOM LINKS">
              <li className="listtext">
                <a href="#" className="text-decoration-none">
                  Price Drop
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  New Products
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  Best Sales
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  Login
                </a>
              </li>
              <li className="mt-2 listtext">
                <a href="#" className="text-decoration-none">
                  My Account
                </a>
              </li>
            </FooterColumn>
          </div>
        </div>
        <div className="pb-2">
          <div className="container">
            <div className="row d-flex justify-content-end">
              <div className="col-lg-3">
                <div className="footericon">
                  <SocialLink iconClass="bi bi-facebook" />
                  <SocialLink iconClass="bi bi-twitter" />
                  <SocialLink iconClass="bi bi-youtube" />
                </div>
              </div>
              <div className="col-lg-9 pe-0 d-flex justify-content-end">
                <div className="d-flex mb-2">
                  <div className="copyright">
                    <p>
                    © Copyright 2023 | Design By {" "}
                      <a href="https://hrishikeshnetke.in" className="text-decoration-none copytext">
                       Hrishikesh Netke
                      </a>
                    </p>
                  </div>
                  <div className="payment">
                    <img src="/assets/imagespayment.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="backtotop" style={{ display: showBackToTop ? 'inline' : 'none' }}>
        <a href="#" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>

  );
};

export default Footer;
