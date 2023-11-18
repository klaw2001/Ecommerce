import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartProducts from "./CartProducts";

const CartSection = () => {
  return (
    <div className="cart-wrapper py-5">
      <Container>
        <Row>
          <Col>
            <div className="coupon py-5">
              <h4 className="title">Coupon Code</h4>
              <p className="global-para">
                Enter your coupon code if you have one.
              </p>
              <div className="cart-form">
                <form
                  action="#"
                  className="d-flex align-items-center position-relative"
                >
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Enter your coupon code."
                    style={{ height: "50px", width: "80%" }}
                  />

                  <button
                    className="global-btn rounded-pill border-0"
                    style={{ position: "absolute", right: "129px" }}
                  >
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
            <div className="calculate">
              <h4 className="title">Add Your Shipping Adress</h4>
              <div className="cartform">
                <form action="#" className="mt-5">
                  <select className="form-select" style={{ height: "50px" }}>
                    <option selected className="bg-secondary text-white">
                      Select a country.
                    </option>
                    {/* Add more options here */}
                  </select>
                  <div className="mt-4">
                    <select className="form-select" style={{ height: "50px" }}>
                      <option selected className="bg-secondary text-white">
                        Select an option.
                      </option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode/ziip"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="ship-btn mt-4">
                    <a
                      href="#"
                      className="text-decoration-none btn rounded-pill"
                    >
                      UPDATE TOTALS
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col className="position-relative">
            <CartProducts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartSection;
