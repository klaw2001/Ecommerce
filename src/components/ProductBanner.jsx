import React from "react";

const ProductBanner = () => {
  return (
    <div className="container-fluid section discountbg mt-5">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 col-sm-7">
            <div className="textcontent">
              <h3 className="fw-light">
                <i>Natural Product</i>
              </h3>
              <h1>SAVE 40% OFF</h1>
              <p>Broccoli roses, always fresh and delicious. 100% Organic</p>
              <div className="d-flex mt-5">
                <div className="box p-1 me-4">
                  <h4 className="mb-0">
                    <span>648</span>
                    <p>DAYS</p>
                  </h4>
                </div>
                <div className="box1 p-1 me-4">
                  <h4 className="mb-0">
                    <span>07</span>
                    <p>HRS</p>
                  </h4>
                </div>
                <div className="box1 p-1 me-4">
                  <h4 className="mb-0">
                    <span>13</span>
                    <p>MINS</p>
                  </h4>
                </div>
                <div className="box1 p-1 me-4">
                  <h4 className="mb-0">
                    <span>40</span>
                    <p>SECS</p>
                  </h4>
                </div>
              </div>
              <div className="discountbtn pt-5">
                <a href="#" className="btn countbtn bg-white rounded-pill">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
