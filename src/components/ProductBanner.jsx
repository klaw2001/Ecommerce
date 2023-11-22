import React from "react";

const ProductBanner = () => {
  return (
    <div className="container-fluid section discountbg mt-5">
      <div className="container">
        <div className="row justify-content-center">
         
          <div className="col-md-6 col-sm-7 text-center">
            <div className="textcontent text-center">
             
              <h1>Deal of the Day</h1>
              <p className="w-100 mw-100">Make a Wonderful Presence Today with our Aroma Tea</p>
              <div className="d-flex mt-5 justify-content-center">
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
                <button className="global-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
