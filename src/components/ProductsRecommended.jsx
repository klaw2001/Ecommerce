import React from "react";

const productsRecommendedObj = [
  { image: "/assets/images/banner-01.jpg" },
  { image: "/assets/images/banner-02.jpg" },
  { image: "/assets/images/banner-03.jpg" },
];

const ProductsRecommended = () => {
  return (
    <div className="container">
      <div className="row d-flex py-5 ">
        {productsRecommendedObj.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="mt-5 banner">
              <a href="#">
                <img src={item.image} className="h-100 w-100" alt="" />
                <div className="overlay1"></div>
                <div className="overlay2"></div>
                <div className="overlay3"></div>
                <div className="overlay4"></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsRecommended;
