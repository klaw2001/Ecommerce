import React from "react";

const HeroSlider = () => {
  return (
    <>
      <div className="container-fluid mt-5 m-0 p-0">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner position-relative">
            <div className="carousel-item active carousel-bg">
              <div className="container position-absolute content">
                <div className="text-black text-capitalize">
                  <h5 className="text-uppercase animation">
                    Discover 100% Organic
                  </h5>
                  <h1 className="display-1 animation-1">
                    DRY FRUITS
                    <p className="fw-bold">UP TO 75% OFF</p>
                  </h1>
                  <a
                    href="#"
                    className="btn rounded-pill carouselbtn animation-2"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-bg2">
              <div className="container position-absolute content">
                <div className="text-black text-capitalize">
                  <h5 className="text-uppercase animation">
                    No sugar zero calories
                  </h5>
                  <h1 className="display-1 animation-1">
                    ORGANIC
                    <p className="fw-bold">ICED TEA</p>
                  </h1>
                  <a
                    href="#"
                    className="btn rounded-pill carouselbtn animation-2"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default HeroSlider;
