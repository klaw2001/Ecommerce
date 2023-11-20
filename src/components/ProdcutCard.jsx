import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsNewArr } from "../redux/products/Action";

// const productCards = [
//   {
//     id: 1,
//     image1: "/assets/images/product-1.jpg",
//     image2: "/assets/images/product-01.jpg",
//     discount: "-25%",
//     title: "Originals Kaval Winkbreaker Wi.",
//     studioDesign: "Studio Design",
//     price1: "$23.90",
//     price2: "$19.12",
//   },
//   {
//     id: 2,
//     image1: "/assets/images/product-2.jpg",
//     image2: "/assets/images/product-02.jpg",
//     badge: "New",
//     title: "Madden By Steve Madden Cale 6",
//     studioDesign: "Studio Design",
//     price: "$11.12",
//   },
//   {
//     id: 3,
//     image1: "/assets/images/product-3.jpg",
//     image2: "/assets/images/product-03.jpg",
//     badge: "New",
//     title: "Water And Wind Resistant Insul.",
//     studioDesign: "Studio Design",
//     price: "$11.12",
//   },
//   {
//     id: 4,
//     image1: "/assets/images/product-4.jpg",
//     badge: "New",
//     title: "Juicy Couture Solid Sleeve Puffe",
//     studioDesign: "Studio Design",
//     price: "$19.12",
//   },
//   {
//     id: 5,
//     image1: "/assets/images/product-01.jpg",
//     image2: "/assets/images/product-05.jpg",
//     discount: "-30%",
//     title: "Juicy Couture Juicy Quilted Terr.",
//     studioDesign: "Studio Design",
//     price1: "$35.90",
//     price2: "$28.12",
//   },
//   {
//     id: 6,
//     image1: "/assets/images/product-06.jpg",
//     image2: "/assets/images/product-3.jpg",
//     badge: "New",
//     title: "Trans-Weighted Hooded Wind",
//     studioDesign: "Studio Design",
//     price: "$11.12",
//   },
//   {
//     id: 7,
//     image1: "/assets/images/product-03.jpg",
//     image2: "/assets/images/product-4.jpg",
//     badge: "New",
//     title: "New Balance Fresh Foam Kaymin",
//     studioDesign: "Studio Design",
//     price: "$18.12",
//   },
//   {
//     id: 8,
//     image1: "/assets/images/product-08.jpg",
//     image2: "/assets/images/product-9.jpg",
//     badge: "New",
//     title: "New Balance Fresh Foam LAZR V",
//     studioDesign: "Studio Design",
//     price: "$18.12",
//   },
// ];
const ProdcutCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsNewArr());
  }, [dispatch]);
  const productCards = useSelector((state) => state.productsArr.productsArr);
  console.log(productCards);
  return (
    <>
      {productCards.map((product) => (
        <Link to={"/single-product/" + product._id}>
          <div className="col" key={product._id}>
            <div className="card">
              <div className="position-relative cardimg">
                <a href="#">
                  <img
                    src={product.image1}
                    className="card-img-top po abc"
                    alt={product.title}
                  />
                  {product.discount && (
                    <span className="badge bg-danger position-absolute">
                      {product.discount}
                    </span>
                  )}
                  {product.badge && (
                    <span className="badge bg-success position-absolute">
                      {product.badge}
                    </span>
                  )}
                </a>
                <div className="producticon">
                  <a href="#" className="icon text-decoration-none shadow-sm">
                    <i className="bi bi-suit-heart"></i>
                  </a>
                  <a href="#" className="icon1 text-decoration-none shadow-sm">
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
                  <a href="#" className="icon3 text-decoration-none shadow-sm">
                    <i className="bi bi-handbag"></i>
                  </a>
                </div>
              </div>
              <div className="card-body producttext">
                <h6>{product.title}</h6>
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
                  {product.price1 && (
                    <div className="d-flex justify-content-center">
                      <p className="text-secondary text-decoration-line-through">
                        {product.price1}
                      </p>
                      <span className="ps-2">{product.price2}</span>
                    </div>
                  )}
                  {product.price && (
                    <div className="d-flex justify-content-center">
                      <span className="ps-2 pb-2">{product.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProdcutCard;
