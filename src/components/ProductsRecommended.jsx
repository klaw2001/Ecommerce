import React from "react";
import img1 from "../images/overlay/overlay-1.png";
import img2 from "../images/overlay/overlay-2.png";
import img3 from "../images/overlay/overlay-3.png";
import { Link } from "react-router-dom";

const productsRecommendedObj = [
  {
    image: img1,
    title: "Aroma Agarbatti",
    path: "/shop",
  },
  { image: img2, title: "Aroma Oils", path: "/shop" },
  { image: img3, title: "Explore More Products", path: "/shop" },
];

const ProductsRecommended = () => {
  return (
    <div className="container">
      <div className="row d-flex py-5 ">
        {productsRecommendedObj.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="mt-5 banner">
              <Link to={item.path}>
                <div>
                  <div className="position-relative">
                    <img src={item.image} className="h-100 w-100" alt="" />
                    <div
                      className={`recom-text position-absolute ${
                        index === 2
                          ? "recom-center"
                          : index === 1
                          ? "recom-center"
                          : "recom-center"
                      }`}
                    >
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                  <div className="overlay1"></div>
                  <div className="overlay2"></div>
                  <div className="overlay3"></div>
                  <div className="overlay4"></div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsRecommended;
