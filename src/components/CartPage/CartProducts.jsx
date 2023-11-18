import React from "react";

const CartProducts = () => {
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
    <div className="cart-products" >
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
              <span className="fw-bold">{elem.totalPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
