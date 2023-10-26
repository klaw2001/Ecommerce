import React from "react";
import HeaderTop from "../components/HeaderTop";

const products = [
  {
    imageSrc: "/assets/images/product-1.jpg",
    hoverImageSrc: "/assets/images/product-01.jpg",
    discountBadge: true,
    title: "Originals Kaval Windbreaker Winter Jacket",
    studioDesign: "Studio Design",
    price: "$19.12",
  },
  {
    imageSrc: "/assets/images/product-2.jpg",
    hoverImageSrc: "/assets/images/product-02.jpg",
    discountBadge: false,
    title: "Madden By Steve Madden Cale 6",
    studioDesign: "Studio Design",
    price: "$11.12",
  },
  {
    imageSrc: "/assets/images/product-3.jpg",
    hoverImageSrc: "/assets/images/product-03.jpg",
    discountBadge: false,
    title: "Water And Wind Resistant Insulated Jacket",
    studioDesign: "Studio Design",
    price: "$11.12",
  },
  // Add more product objects here as needed
];
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
      <div className="container py-5">
        <div className="row mt-4 mb-5">
          {products.map((product, index) => (
            <div className="col-lg-4 mb-5" key={index}>
              <div className="card">
                <div className="position-relative cardimg">
                  <a href="#">
                    <img
                      src={product.imageSrc}
                      className="card-img-top po abc"
                      alt={product.imageSrc}
                    />
                    <img
                      src={product.hoverImageSrc}
                      className="card-img-top po hoverimg abc"
                      alt={product.hoverImageSrc}
                    />
                    <span
                      className={`badge position-absolute ${
                        product.discountBadge ? "bg-danger" : "bg-success"
                      }`}
                    >
                      {product.discountBadge ? "-25%" : "New"}
                    </span>
                  </a>
                  <div className="producticon">
                    <a href="#" className="icon text-decoration-none shadow-sm">
                      <i className="bi bi-suit-heart"></i>
                    </a>
                    <a
                      href="#"
                      className="icon1 text-decoration-none shadow-sm"
                    >
                      <i className="bi bi-arrow-repeat"></i>
                    </a>
                    <a
                      href="#"
                      className="icon2 text-decoration-none shadow-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="bi bi-search"></i>
                    </a>
                    <a
                      href="#"
                      className="icon3 text-decoration-none shadow-sm"
                    >
                      <i className="bi bi-handbag"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body producttext">
                  <h6 className="text-center">{product.title}</h6>
                  <div className="text-center">
                    <div className="text">
                      <p>
                        <a
                          href="#"
                          className="text-decoration-none text-secondary"
                        >
                          {product.studioDesign}
                        </a>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      {product.discountBadge && (
                        <p className="text-secondary text-decoration-line-through">
                          $23.90
                        </p>
                      )}
                      <span
                        className={`ps-2 ${
                          product.discountBadge ? "pb-2" : "pb-3"
                        }`}
                      >
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
