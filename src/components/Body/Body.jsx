import React from "react";
import HeroSlider from "../HeroSlider"; 
import ProductsRecommended from '../ProductsRecommended';
import ShopByCategories from '../ShopByCategories';
import FeaturedInfo from '../FeaturedInfo';
import NewArrivals from '../NewArrivals';
import ProductBanner from '../ProductBanner';
import Testimonial from '../Testimonials';
import AllProducts from '../AllProducts';
import OurBlog from '../LatestNews';

const Body = () => {
  return (
    <>
      <HeroSlider />
      <ProductsRecommended />
      <ShopByCategories />
      <FeaturedInfo />
      <NewArrivals />
      <ProductBanner />
      <Testimonial />
      <OurBlog />
    </>
  );
};

export default Body;
