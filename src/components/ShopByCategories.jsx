import React, { useEffect } from "react";
import HorizontalRule from "./HorizontalRule";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/category/Action";
import Spinner from "react-bootstrap/Spinner";
import img1 from '../images/categories/1.png'
import img2 from '../images/categories/2.png'
import img3 from '../images/categories/3.png'
import img4 from '../images/categories/4.png'
import img5 from '../images/categories/5.png'
import img6 from '../images/categories/6.png'
const categories = [
  {
    id: 1,
    image: img1,
    alt: "Tea",
    title: "Tea",
  },
  {
    id: 2,
    image:img2,
    alt: "Food",
    title: "Food",
  },
  {
    id: 3,
    image: img3,
    alt: "Freshners",
    title: "Freshners",
  },
  {
    id: 4,
    image: img4,
    alt: "Oil",
    title: "Oil",
  },
  {
    id: 5,
    image: img5,
    alt: "Soap",
    title: "Soap",
  },
  {
    id: 6,
    image: img6,
    alt: "Teeth",
    title: "Teeth",
  },
];

const ShopByCategories = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, [dispatch]);

  // const categories = useSelector((state) => state.categories.categories);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="headtext text-center">
          <h3 className="fw-light">
            <i>Shop By Categories</i>
          </h3>
          <h2 className="fw-bolder mb-3">FEATURED CATEGORIES</h2>
          <HorizontalRule />
        </div>
      </div>
      {categories && categories.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 d-flex justify-content-center">
          {categories.map((category) => (
            <div key={category.id} className="col mt-3 p-0">
              <div className="card border-0 text-center">
                <img
                  src={category.image}
                  className="card-img-top categoryimg m-auto"
                  alt={category.alt}
                  style={{ width: "170px" }}
                />
                <div className="text-center mt-4 card-text">
                  <h6>{category.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center py-5">

          <Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default ShopByCategories;
