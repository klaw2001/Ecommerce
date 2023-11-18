import React from "react";
import HeaderTop from "../components/HeaderTop";
import CartTable from "./CartTable";
import GlobalHero from "./HeroSections/GlobalHero";
import CartSection from "./CartPage/CartSection";

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
const Cart = () => {
  const BreadcrumbItem = ({ text }) => (
    <li className="breadcrumb-item breadtext1">
      <a href="#" className="text-decoration-none pe-1">
        {text}
      </a>
    </li>
  );

  const BreadcrumbIcon = () => (
    <li className="px-2 active breadicon" aria-current="page">
      <i className="bi bi-chevron-right"></i>
    </li>
  );

  return (
    <>
      <GlobalHero headingText="Cart" />

      {/* <CartTable cartItems={cartItems} /> */}
      <CartSection/>
    </>
  );
};

export default Cart;
