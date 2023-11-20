import React from "react";
import HeaderTop from "./HeaderTop";
import GlobalHero from "./HeroSections/GlobalHero";

const Contact = () => {
  const BreadcrumbItem = ({ text }) => (
    <li className="breadcrumb-item breadtext1">
      <a href="#" className="text-decoration-none pe-1">
        {text}
      </a>
    </li>
  );

  const BreadcrumbIcon = () => (
    <li className="px-2 active breadicon" aria-current="page">
      <i className="bi bi-chevron-right"></i>
    </li>
  );

  return (
    <>
    <GlobalHero headingText='Contact'/>
      {/* <HeaderTop /> */}
      {/* <div className="pagebg">
        <div className="container">
          <div className="pagebanner">
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center"
            >
              <ol className="breadcrumb">
                <BreadcrumbItem text="Home" />
                <BreadcrumbIcon />
                <BreadcrumbItem text="Shopping Cart" />
              </ol>
            </nav>
          </div>
        </div>
      </div> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.416543666887!2d72.8260746144345!3d19.039208357075694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63090aaadb7%3A0x84f1711d775b8d18!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676271208742!5m2!1sen!2sin"
        width="100%"
        height="360"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="details mt-5">
              <h3>Get in touch</h3>
              <p>
                Top rated construction packages we pleasure rationally encounter
                consequences interesting who loves or pursue or desires
              </p>
              <div className="contactform">
                <form>
                  <div className="row">
                    <div className="col-md-6 mt-5">
                      <div className="form">
                        <input
                          type="text"
                          className="form-control"
                          style={{ height: "50px" }}
                          placeholder="Your Name*"
                          aria-label="Your Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="form">
                        <input
                          type="text"
                          className="form-control"
                          style={{ height: "50px" }}
                          placeholder="Your Email*"
                          aria-label="Your Email*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form">
                        <textarea
                          name="message"
                          className="form-control"
                          style={{ height: "275px" }}
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4 formbtn">
                      <button className="btn rounded-pill">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactinfo">
              <div className="information">
                <h4>Office Address</h4>
                <p className="px-3">
                  245 Southern Street, Apartment no. 174 Central Town, New York,
                  USA
                </p>
              </div>
              <div className="information">
                <h4>Phone Number</h4>
                <p className="m-0">
                  <a href="#" className="text-decoration-none number">
                    +12345 678 987
                  </a>
                </p>
                <p className="m-0">
                  <a href="#" className="text-decoration-none number">
                    +98745 612 321
                  </a>
                </p>
              </div>
              <div className="information">
                <h4>Web Address</h4>
                <p className="m-0">
                  <a href="#" className="text-decoration-none number">
                    info@example.com
                  </a>
                </p>
                <p className="m-0">
                  <a href="#" className="text-decoration-none number">
                    www.example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
