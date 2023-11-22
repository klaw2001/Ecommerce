import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCartItems } from "../../redux/cart/Action";

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

  const dispatch = useDispatch();
  const { cart_id } = useParams();
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    dispatch(getCartItems(userID, cart_id));
  },[dispatch]);
  const cartItems = useSelector((state) => state.cart.cart);
  
  // const cartItems = [
  //   {
  //     image: "/assets/images/product-03.jpg",
  //     name: "Originals Kaval Windbreaker Winter Jacket",
  //     link: "#",
  //     oldPrice: "$35.90",
  //     newPrice: "$28.72",
  //     discount: "Save 20%",
  //     size: "Size S",
  //     color: "Color White",
  //     quantity: 1,
  //     totalPrice: "$28.72",
  //   },
  //   {
  //     image: "/assets/images/product-3.jpg",
  //     name: "Originals Kaval Windbreaker Winter Jacket",
  //     link: "#",
  //     oldPrice: "$35.90",
  //     newPrice: "$28.72",
  //     discount: "Save 20%",
  //     size: "Size S",
  //     color: "Color White",
  //     quantity: 1,
  //     totalPrice: "$28.72",
  //   },
  //   {
  //     image: "/assets/images/product-06.jpg",
  //     name: "Originals Kaval Windbreaker Winter Jacket",
  //     link: "#",
  //     oldPrice: "$35.90",
  //     newPrice: "$28.72",
  //     discount: "Save 20%",
  //     size: "Size S",
  //     color: "Color White",
  //     quantity: 1,
  //     totalPrice: "$28.72",
  //   },
  // ];
  return (
    <div className="cart-products">
      {cartItems.map((elem, ind) => (
        <div className="cart-product d-flex " key={ind}>
          <div className="cart-img-div">
            <img
              src={`http://localhost:8000/uploads/products/${elem.thumbnail}`}
              alt={elem.name}
              className="img-fluid rounded"
              width={200}
            />
          </div>
          <div className="cart-text-div ">
            <div className="box-1-div ms-4">
              <h5>{elem.name}</h5>
              <span className="fw-bold">₹{elem.price}</span>
              <p className="py-1">Size : {elem.shortdescription}</p>
              <p>{elem.category}</p>
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
