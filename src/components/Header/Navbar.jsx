import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
        <div className="container d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand">
            <img src="/assets/images/logo.png" alt="Logo" />
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a className="navbar-brand me-5 p-0" href="./Project.html">
                  <img src="/assets/imageslogo.png" alt="" />
                </a>
              </h5>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-start flex-grow-1 gap-4">
                <Link to="/" className="nav-link active">
                  <li className="nav-item home1">
                    Home
                  </li>
                </Link>
                <Link to="/products" className="nav-link active">
                  <li className="nav-item home1">
                    Product
                  </li>
                </Link>
                <Link to="/cart" className="nav-link active">
                  <li className="nav-item home1">
                    Cart
                  </li>
                </Link>
                <Link to="/blog" className="nav-link active">
                  <li className="nav-item home1">
                    Blog
                  </li>
                </Link>
                <Link to="/contact" className="nav-link active">
                  <li className="nav-item home1">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <ul className="navicon p-0 mb-0 ">
              <li className="nav_icon">
                <a href="#">
                  <i className="bi bi-search text-decoration-none"></i>
                </a>
              </li>
              <li className="nav_icon navbtn">
                <button
                  type="button"
                  className="btn position-relative navicon shadow-none p-0 "
                >
                  <i className="bi bi-shuffle text-decoration-none position-relative"></i>
                  <span className="position-absolute top-100 start-100 translate-middle px-1 bg-danger rounded-circle text-white">
                    3<span className="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>
              <li className="nav_icon navbtn icon-hover">
                <button
                  type="button"
                  className="btn position-relative navicon shadow-none p-0"
                >
                  <i className="bi bi-heart text-decoration-none"></i>
                  <span className="position-absolute top-100 start-100 translate-middle px-1 bg-danger rounded-circle text-white">
                    3<span className="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>
              <li className="nav_icon navbtn icon-hover">
                <button
                  type="button"
                  className="btn position-relative navicon shadow-none p-0"
                >
                  <i className="bi bi-handbag text-decoration-none"></i>
                  <span className="position-absolute top-100 start-100 translate-middle px-1 bg-danger rounded-circle text-white">
                    3<span className="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>
              <li className="nav_icon icon-hover">
                <a href="#">
                  <i className="bi bi-gear text-decoration-none"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
