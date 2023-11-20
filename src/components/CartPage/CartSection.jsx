import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CartProducts from "./CartProducts";
import CartForm from "./CartFrom";

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
              <h4 className="title">Add Your Shipping Address</h4>
              {/* <div className="cartform">
                <Form className="mt-5">
                  <Form.Group controlId="formName">
                    <Form.Label className="mt-2">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formAddress">
                    <Form.Label className="mt-2">Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label className="mt-2">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>

                  <Form.Group controlId="formState">
                    <Form.Label className="mt-2">State</Form.Label>
                    <Form.Control type="text" placeholder="Enter your state" />
                  </Form.Group>

                  <Form.Group controlId="formCity">
                    <Form.Label className="mt-2">City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>

                  <Form.Group controlId="formPincode">
                    <Form.Label className="mt-2">Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your pincode"
                    />
                  </Form.Group>

                  <div className="ship-btn mt-4">
                    <Button variant="primary" type="submit">
                      UPDATE TOTALS
                    </Button>
                  </div>
                </Form>
              </div> */}
              <CartForm/>
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
