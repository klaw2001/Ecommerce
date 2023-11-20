import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CartProducts = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const cartItems = [
    {
      image: "/assets/images/product-03.jpg",
      name: "Originals Kaval Windbreaker Winter Jacket",
      link: "#",
      oldPrice: "$35.90",
      newPrice: "$28.72",
      discount: "Save 20%",
      size: "Size S",
      color: "Color White",
      quantity: 1,
      totalPrice: "$28.72",
    },
    {
      image: "/assets/images/product-3.jpg",
      name: "Originals Kaval Windbreaker Winter Jacket",
      link: "#",
      oldPrice: "$35.90",
      newPrice: "$28.72",
      discount: "Save 20%",
      size: "Size S",
      color: "Color White",
      quantity: 1,
      totalPrice: "$28.72",
    },
    {
      image: "/assets/images/product-06.jpg",
      name: "Originals Kaval Windbreaker Winter Jacket",
      link: "#",
      oldPrice: "$35.90",
      newPrice: "$28.72",
      discount: "Save 20%",
      size: "Size S",
      color: "Color White",
      quantity: 1,
      totalPrice: "$28.72",
    },
  ];
  return (
    <div className="cart-products">
      {cartItems.map((elem, ind) => (
        <div className="cart-product d-flex align-items-center" key={ind}>
          <div className="cart-img-div">
            <img
              src={elem.image}
              alt={elem.name}
              className="img-fluid"
              width={200}
            />
          </div>
          <div className="cart-text-div ">
            <div className="box-1-div">
              <h5>{elem.name}</h5>
              <p>{elem.size}</p>
              <div className="d-flex justify-content-between align-items-center">
                <Form>
                  <Form.Group controlId="quantityCounter">
                    {/* <Form.Label>Quantity</Form.Label> */}
                    <div className="d-flex">
                      <Button
                        variant="outline-secondary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        value={quantity}
                        readOnly
                        className="text-center mx-2 w-25"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
                <span className="fw-bold">{elem.totalPrice}</span>
                <span>
                  <i className="bi bi-trash3"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
