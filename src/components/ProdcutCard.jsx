import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsNewArr } from "../redux/products/Action";

const productCards = [
  {
    id: 1,
    image1: "/assets/images/product-1.jpg",
    image2: "/assets/images/product-01.jpg",
    discount: "-25%",
    name: "Originals Kaval Winkbreaker Wi.",
    studioDesign: "Studio Design",
    price1: "$23.90",
    price2: "$19.12",
  },
  {
    id: 2,
    image1: "/assets/images/product-2.jpg",
    image2: "/assets/images/product-02.jpg",
    badge: "New",
    name: "Madden By Steve Madden Cale 6",
    studioDesign: "Studio Design",
    price: "$11.12",
  },
  {
    id: 3,
    image1: "/assets/images/product-3.jpg",
    image2: "/assets/images/product-03.jpg",
    badge: "New",
    name: "Water And Wind Resistant Insul.",
    studioDesign: "Studio Design",
    price: "$11.12",
  },
  {
    id: 4,
    image1: "/assets/images/product-4.jpg",
    badge: "New",
    name: "Juicy Couture Solid Sleeve Puffe",
    studioDesign: "Studio Design",
    price: "$19.12",
  },
  {
    id: 5,
    image1: "/assets/images/product-01.jpg",
    image2: "/assets/images/product-05.jpg",
    discount: "-30%",
    name: "Juicy Couture Juicy Quilted Terr.",
    studioDesign: "Studio Design",
    price1: "$35.90",
    price2: "$28.12",
  },
  {
    id: 6,
    image1: "/assets/images/product-06.jpg",
    image2: "/assets/images/product-3.jpg",
    badge: "New",
    name: "Trans-Weighted Hooded Wind",
    studioDesign: "Studio Design",
    price: "$11.12",
  },
  {
    id: 7,
    image1: "/assets/images/product-03.jpg",
    image2: "/assets/images/product-4.jpg",
    badge: "New",
    name: "New Balance Fresh Foam Kaymin",
    studioDesign: "Studio Design",
    price: "$18.12",
  },
  {
    id: 8,
    image1: "/assets/images/product-08.jpg",
    image2: "/assets/images/product-9.jpg",
    badge: "New",
    name: "New Balance Fresh Foam LAZR V",
    studioDesign: "Studio Design",
    price: "$18.12",
  },
];
const ProdcutCard = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductsNewArr());
  // }, [dispatch]);
  // const productCards = useSelector((state) => state.productsArr.productsArr);
  // console.log(productCards);
  return (
    <>
      {productCards?.map((product, ind) => (
        <Link
          to={"/single-product/" + product._id}
          key={ind}
          className="text-decoration-none"
        >
          <div className="col" key={ind}>
            <div className="card">
              <div className="position-relative cardimg">
                <img
                  src={`http://localhost:8000/uploads/products/${product.thumbnail}`}
                  className=" po abc"
                  alt={product?.name}
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
                  <Link
                    to={"/cart/" + product._id}
                    className="icon3 text-decoration-none shadow-sm"
                  >
                    <i className="bi bi-handbag"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body producttext text-center d-flex justify-content-between align-items-center">
                <div className="text-center">
                  <h6>{product?.name}</h6>
                  <div className="text">
                    <p>
                      <a
                        href="#"
                        className="text-decoration-none text-secondary"
                      >
                        {product.categories?.name}
                      </a>
                    </p>
                  </div>
                  <div>
                    {product.saleprice ? (
                      <div className="d-flex justify-content-center">
                        <p className="text-secondary text-decoration-line-through">
                          ₹{product.price}
                        </p>
                        <span className="ps-2">₹{product.saleprice}</span>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-start">
                        <span className="ps-2 pb-2">₹{product.price}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="" >
                <Link
                    to={"/cart/" + product._id}
                    className="icon3 text-decoration-none shadow-sm rounded-circle text-white"
                    style={{    padding: '9px 12px',backgroundColor:'#83bc2e'}}
                  >
                    <i className="bi bi-handbag"></i>
                  </Link>
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
