import React from "react";

const categories = [
  {
    id: 1,
    image: "/assets/images/category-1.png",
    alt: "Fruits",
    title: "Fruits",
  },
  {
    id: 2,
    image: "/assets/images/category-2.png",
    alt: "Flour",
    title: "Flour",
  },
  {
    id: 3,
    image: "/assets/images/category-3.png",
    alt: "Vegetables",
    title: "Vegetables",
  },
  {
    id: 4,
    image: "/assets/images/category-4.png",
    alt: "Meat",
    title: "Meat",
  },
  {
    id: 5,
    image: "/assets/images/category-5.png",
    alt: "Milk & Eggs",
    title: "Milk & Eggs",
  },
  {
    id: 6,
    image: "/assets/images/category-6.png",
    alt: "Jam",
    title: "Jam",
  },
];

const ShopByCategories = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="headtext text-center">
          <h3 className="fw-light">
            <i>Shop By Categories</i>
          </h3>
          <h2 className="fw-bolder mb-3">FEATURED CATEGORIES</h2>
          <p>
            <img src="/assets/images/hr.webp" alt="Horizontal Rule" />
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 d-flex justify-content-center">
        {categories.map((category) => (
          <div key={category.id} className="col mt-3 p-0">
            <div className="card border-0">
              <img
                src={category.image}
                className="card-img-top categoryimg"
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
    </div>
  );
};

export default ShopByCategories;
