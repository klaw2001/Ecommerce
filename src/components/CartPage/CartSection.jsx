import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CartProducts from "./CartProducts";
import CartForm from "./CartFrom";
import cartimg from "../../images/empty-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCartItems } from "../../redux/cart/Action";

const CartSection = () => {
  const dispatch = useDispatch();
  const { cart_id } = useParams();
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    dispatch(getCartItems(userID, cart_id));
  });
  const cartU = useSelector((state) => state.cart.cart);
  return (
    <>
      {cartU.length > 0 ? (
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

                  <CartForm />
                </div>
              </Col>
              <Col className="position-relative">
                <CartProducts />
              </Col>
            </Row>
          </Container>
          
        </div>
      ) : (
        <div>
          <Container>
            <div className="d-flex justify-content-center align-items-center py-5 flex-column">
              <img src={cartimg} alt="" />
              <h1 className="global-heading">
                Oops!, Your Shopping Cart is Empty
              </h1>
              <Link to="/shop" className="global-btn mt-3">
                Shop Products
              </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default CartSection;
