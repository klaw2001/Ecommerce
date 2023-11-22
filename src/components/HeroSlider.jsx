import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import car1 from "../images/aroma-smoke-two.png";
import car2 from "../images/carouselimg.jpg"
import { Container } from "react-bootstrap";
import "../new.css";
function UncontrolledExample() {
  return (
    <>
      {/* <Container> */}

      <Carousel interval={null}>
        <Carousel.Item className="car-bg-2">
          <Container>
            
            <div className="d-flex justify-content-center align-items-center">
              <div className="car-text text-center middle-slider">
                <h1 className="fs-1 fw-bold">30% Off on Your First Order</h1>
                <button className="global-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="car-bg-1">
          <Container>
          <div className="d-flex justify-content-around align-items-center">
              <img src={car1} alt="" className="" width={500} />
              <div className="car-text">
                <p className="text-uppercase">Say No To Tobacoo</p>
                <h1 className="fs-1 fw-bold">Aroma Smoke</h1>
                <button className="global-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="car-bg-3">
        <Container>        
            <div className="d-flex justify-content-start align-items-center">
              <div className="car-text text-right middle-slider">
                <h1 className="fs-1 fw-bold text-white">30% Off on Your First Order</h1>
                <button className="global-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
      {/* </Container> */}
    </>
  );
}

export default UncontrolledExample;
