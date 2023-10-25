import './App.css';
import Navbar from './components/Header/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductsRecommended from './components/ProductsRecommended';
import ShopByCategories from './components/ShopByCategories';
import FeaturedInfo from './components/FeaturedInfo';
import NewArrivals from './components/NewArrivals';
import ProductBanner from './components/ProductBanner';
import Testimonial from './components/Testimonials';
import AllProducts from './components/AllProducts';
import OurBlog from './components/LatestNews';
import Footer from './components/Footer/Footer';
// import (Browserrouter as Router )

function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ProductsRecommended />
      <ShopByCategories />
      <FeaturedInfo />
      <NewArrivals />
      <ProductBanner />
      <Testimonial />
      <AllProducts />
      <OurBlog />
      <Footer />
    </div>
  );
}

export default App;
