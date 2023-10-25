import React from 'react';
import ProdcutCard from './ProdcutCard';

// const productCards = [
//   {
//     id: 1,
//     image1: '/assets/images/product-1.jpg',
//     image2: '/assets/images/product-01.jpg',
//     discount: '-25%',
//     title: 'Originals Kaval Winkbreaker Wi.',
//     studioDesign: 'Studio Design',
//     price1: '$23.90',
//     price2: '$19.12',
//   },
//   {
//     id: 2,
//     image1: '/assets/images/product-2.jpg',
//     image2: '/assets/images/product-02.jpg',
//     badge: 'New',
//     title: 'Madden By Steve Madden Cale 6',
//     studioDesign: 'Studio Design',
//     price: '$11.12',
//   },
//   {
//     id: 3,
//     image1: '/assets/images/product-3.jpg',
//     image2: '/assets/images/product-03.jpg',
//     badge: 'New',
//     title: 'Water And Wind Resistant Insul.',
//     studioDesign: 'Studio Design',
//     price: '$11.12',
//   },
//   {
//     id: 4,
//     image1: '/assets/images/product-4.jpg',
//     badge: 'New',
//     title: 'Juicy Couture Solid Sleeve Puffe',
//     studioDesign: 'Studio Design',
//     price: '$19.12',
//   },
//   {
//     id: 5,
//     image1: '/assets/images/product-01.jpg',
//     image2: '/assets/images/product-05.jpg',
//     discount: '-30%',
//     title: 'Juicy Couture Juicy Quilted Terr.',
//     studioDesign: 'Studio Design',
//     price1: '$35.90',
//     price2: '$28.12',
//   },
//   {
//     id: 6,
//     image1: '/assets/images/product-06.jpg',
//     image2: '/assets/images/product-3.jpg',
//     badge: 'New',
//     title: 'Trans-Weighted Hooded Wind',
//     studioDesign: 'Studio Design',
//     price: '$11.12',
//   },
//   {
//     id: 7,
//     image1: '/assets/images/product-03.jpg',
//     image2: '/assets/images/product-4.jpg',
//     badge: 'New',
//     title: 'New Balance Fresh Foam Kaymin',
//     studioDesign: 'Studio Design',
//     price: '$18.12',
//   },
//   {
//     id: 8,
//     image1: '/assets/images/product-08.jpg',
//     image2: '/assets/images/product-9.jpg',
//     badge: 'New',
//     title: 'New Balance Fresh Foam LAZR V',
//     studioDesign: 'Studio Design',
//     price: '$18.12',
//   },
// ];

const NewArrivals = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="headtext text-center">
          <h3 className="fw-light">
            <i>See Our latest</i>
          </h3>
          <h2 className="fw-bolder mb-3">NEW ARRIVALS</h2>
          <p>
            <img src="/assets/images/hr.webp" alt="" />
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
        <ProdcutCard />
      </div>
    </div>
  );
};

export default NewArrivals;
