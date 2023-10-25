import React from "react";
import HeaderTop from "../components/HeaderTop";

const Products = () => {
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
      <HeaderTop />
      <div className="pagebg">
        <div className="container">
          <div className="pagebanner">
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center"
            >
              <ol className="breadcrumb">
                <BreadcrumbItem text="Home" />
                <BreadcrumbIcon />
                <BreadcrumbItem text="Shop" />
                <BreadcrumbIcon />
                <BreadcrumbItem text="Shop Single" />
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
