import React, { useEffect } from "react";
import img1 from "../../images/shop-single-01.jpg";
import img2 from "../../images/shop-single-02.jpg";
import img3 from "../../images/shop-single-003.jpg";
import img4 from "../../images/shop-single-04.jpg";

import pro1 from "../../images/product-1.jpg";
import pro2 from "../../images/product-01.jpg";
import pro3 from "../../images/product-05.jpg";
import pro4 from "../../images/shop-single-04.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/products/Action";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const { product_id } = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSingleProduct(product_id))
  },[dispatch])
  const sinProduct = useSelector((state)=>state.productsArr.product)
  console.log(sinProduct)
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="gallery mt-5">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active position-relative"
                  id="pills-home"
                  role="tabpanel"
                >
                  <img
                    src={`http://localhost:8000/uploads/products/${sinProduct.images[1]}`}
                    alt=""
                    className="w-100 h-100"
                    style={{ width: "570px" }}
                  />
                  <span className="badge product-badge position-absolute">
                    New
                  </span>
                </div>
                <div
                  className="tab-pane fade position-relative "
                  id="pills-profile"
                  role="tabpanel"
                >
                  <img
                    src={`http://localhost:8000/uploads/products/${sinProduct.images[2]}`}
                    alt=""
                    className="w-100 h-100"
                    style={{ width: "570px" }}
                  />
                  <span className="badge product-badge position-absolute">
                    New
                  </span>
                </div>
                <div
                  className="tab-pane fade position-relative"
                  id="pills-contact"
                  role="tabpanel"
                >
                  <img
                    src={`http://localhost:8000/uploads/products/${sinProduct.images[3]}`}
                    alt=""
                    className="w-100 h-100"
                    style={{ width: "570px" }}
                  />
                  <span className="badge product-badge position-absolute">
                    New
                  </span>
                </div>
                <div
                  className="tab-pane fade position-relative"
                  id="pills-about"
                  role="tabpanel"
                >
                  <img
                    src={`http://localhost:8000/uploads/products/${sinProduct.images[4]}`}
                    alt=""
                    className="w-100 h-100"
                    style={{ width: "570px" }}
                  />
                  <span className="badge product-badge position-absolute">
                    New
                  </span>
                </div>
              </div>
              <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                <li className="nav-item me-4 mt-4">
                  <a href="#" aria-label="Previous">
                    <i className="bi bi-chevron-left"></i>
                  </a>
                </li>
                <li className="nav-item fruits-bar me-4" role="presentation">
                  <button
                    className="nav-link active fruits1"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                  >
                    <img src={`http://localhost:8000/uploads/products/${sinProduct.images[1]}`} alt="" style={{ width: "90px" }} />
                  </button>
                </li>
                <li className="nav-item fruits-bar me-4" role="presentation">
                  <button
                    className="nav-link fruits"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                  >
                    <img src={`http://localhost:8000/uploads/products/${sinProduct.images[2]}`} alt="" style={{ width: "90px" }} />
                  </button>
                </li>
                <li className="nav-item fruits-bar me-4" role="presentation">
                  <button
                    className="nav-link fruits"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                  >
                    <img src={`http://localhost:8000/uploads/products/${sinProduct.images[3]}`} alt="" style={{ width: "90px" }} />
                  </button>
                </li>
                <li className="nav-item fruits-bar me-4" role="presentation">
                  <button
                    className="nav-link fruits"
                    id="pills-about-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-about"
                    type="button"
                    role="tab"
                  >
                    <img src={`http://localhost:8000/uploads/products/${sinProduct.images[4]}`} alt="" style={{ width: "90px" }} />
                  </button>
                </li>
                <li className="nav-item mt-4">
                  <a href="#" aria-label="Previous">
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="modal-title mt-5">
              <h3 className="global-medium-heading mb-3">
                Juicy Couture Juicy Quilted Terry Track Jacket
              </h3>
            </div>
            <div className="modaltext">
              <p>
                Reference:
                <span>Demo</span>
              </p>
              <div className="review d-flex">
                <div className="star d-flex me-3" style={{ width: "85px" }}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill whitestar"></i>
                </div>
                <div className="me-3">
                  <a href="#" className="text-decoration-none text-black">
                    <i className="bi bi-chat-dots"></i>
                    Read reviews
                    <span>(3)</span>
                  </a>
                </div>
                <div>
                  <a href="#" className="text-decoration-none text-black">
                    <i className="bi bi-pencil-square"></i>
                    Write a review
                  </a>
                </div>
              </div>
              <div className="productprice mt-3">
                <span className="oldprice">$35.90</span>
                <span className="newprice">$28.72</span>
                <span className="offer">Save 20%</span>
              </div>
              <div className="description py-3">
                <ul className="list-unstyled text-secondary ptext">
                  <li>
                    Block out the haters with the fresh adidas® Originals Kaval
                    Windbreaker Jacket.
                  </li>
                  <li>Part of the Kaval Collection.</li>
                  <li>
                    Regular fit is eased, but not sloppy, and perfect for any
                    activity.
                  </li>
                  <li>
                    Plain-woven jacket specifically constructed for freedom of
                    movement.
                  </li>
                </ul>
              </div>
              <div className="size-color d-flex">
                <div className="size mt-5 me-5">
                  <span className="label">SIZE</span>
                  <select
                    className="form-select shadow-none mt-2"
                    aria-label="Default select example"
                  >
                    <option selected>S</option>
                    <option value="1">M</option>
                    <option value="2">L</option>
                    <option value="3">XL</option>
                  </select>
                </div>
                <div className="color mt-5">
                  <span className="label">COLOR</span>
                  <div className=" d-flex mt-3">
                    <div className="color-label"></div>
                    <div className="color-label1"></div>
                    <div className="color-label2"></div>
                  </div>
                </div>
              </div>
              <div className="pt-4 d-flex">
                <div className="productcart me-5">
                  <button type="button" className="sub1">
                    <i className="bi bi-chevron-up"></i>
                  </button>
                  <input type="text" value="1" />
                  <button type="button" className="sub">
                    <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
                <div className="cartbutton">
                  <a href="#" className="btn rounded-pill">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="add pt-4">
                <span className="pe-4 addtext">
                  <a
                    href="#"
                    className="text-decoration-none text-secondary infotext"
                  >
                    <i className="bi bi-heart pe-2"></i>Add to wishlist
                  </a>
                </span>
                <span className="addtext">
                  <a
                    href="#"
                    className="text-decoration-none text-secondary infotext"
                  >
                    <i className="bi bi-shuffle pe-2"></i>Add to compare
                  </a>
                </span>
              </div>
              <div className="d-flex share pt-3">
                <p className="pe-3">SHARE</p>
                <ul className="list-unstyled d-flex">
                  <li className="shareicon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-facebook pe-4 text-decoration-none"></i>
                    </a>
                  </li>
                  <li className="shareicon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-twitter pe-4 text-decoration-none"></i>
                    </a>
                  </li>
                  <li className="shareicon">
                    <a href="#">
                      {" "}
                      <i className="bi bi-pinterest pe-4 text-decoration-none"></i>
                    </a>
                  </li>
                  <li className="shareicon">
                    <a href="#">
                      <i className="bi bi-linkedin pe-4 text-decoration-none"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-reassurance pt-2">
                <ul className="list-unstyled">
                  <li>
                    <div className="reassurance-item d-flex py-2 border-bottom">
                      <img
                        src="./Images/icon1.png"
                        alt=""
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>
                        Security policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="reassurance-item d-flex py-2 border-bottom">
                      <img
                        src="./Images/icon2.png"
                        alt=""
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>
                        Delivery policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="reassurance-item d-flex py-2 border-bottom">
                      <img
                        src="./Images/icon3.png"
                        alt=""
                        className="me-2"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>
                        Return policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <nav>
            <div
              className="nav nav-tabs d-flex justify-content-center border-bottom-0"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active search-head1"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                DESCRIPTION
              </button>
              <button
                className="nav-link search-head2 "
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                PRODUCT DETAILS
              </button>
              <button
                className="nav-link search-head3"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                REVIEWS
              </button>
            </div>
          </nav>
          <div className="tab-content border tabs" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="product-description">
                <ul className="list-unstyled">
                  <li>
                    Calvin Klein® Jeans hoodie with reflective logo detailing at
                    the sleeves.
                  </li>
                  <li>
                    Sweatshirt crafted in a soft-knit fabric for superior
                    comfort.
                  </li>
                  <li>Drawstring hood.</li>
                  <li>Long sleeves.</li>
                  <li>Full-zip front.</li>
                  <li>Side pockets.</li>
                  <li>Ribbed finishes at the cuffs and hem.</li>
                  <li>Straight hemline.</li>
                  <li>72% cotton, 28% polyester.</li>
                  <li>Machine wash cold, tumble dry.</li>
                  <li>Imported.</li>
                  <li>
                    Product measurements were taken using size MD. Please note
                    that measurements may vary by size.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="product-manufacturer mb-4">
                <a href="#">
                  <img src="./Images/manufacturer.jpg" alt="" />
                </a>
              </div>
              <div className="product-reference">
                <p className="mb-1">
                  Reference
                  <span>demo_3</span>
                </p>
              </div>
              <div className="product-reference">
                <p>
                  In stock
                  <span>1200 Items</span>
                </p>
              </div>
              <div className="product-features">
                <p className="p-head">Data Sheet</p>
                <div className="datasheet d-flex flex-wrap">
                  <div className="col-md-6 sheet1">
                    <p>Compositions</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Elastane</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Paper Type</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Plain</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Color</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>White</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Size</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>M</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>Frame Size</p>
                  </div>
                  <div className="col-md-6 sheet1">
                    <p>60x90cm</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="product-review">
                <div className="review1 d-flex mb-4">
                  <div className="reviewimg me-3">
                    <img src="./Images/author-1.png" alt="" />
                  </div>
                  <div className="review-text">
                    <div className="review-name d-flex">
                      <h6 className="me-3 fw-bold text-secondary">
                        Rosie Silva
                      </h6>
                      <div
                        className="star1 d-flex me-3"
                        style={{ width: "85px" }}
                      >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill whitestar"></i>
                      </div>
                    </div>
                    <p>11/20/2021</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse deleniti itaque velit explicabo at eum incidunt vel
                      reprehenderit maxime eos facere ut pariatur voluptas aut,
                      porro quia molestias sequi cupiditate!
                    </p>
                  </div>
                </div>
                <div className="review1 d-flex mb-4">
                  <div className="reviewimg me-3">
                    <img src="./Images/author-2.png" alt="" />
                  </div>
                  <div className="review-text">
                    <div className="review-name d-flex">
                      <h6 className="me-3 fw-bold text-secondary">
                        Rosie Silva
                      </h6>
                      <div
                        className="star1 d-flex me-3"
                        style={{ width: "85px" }}
                      >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill whitestar"></i>
                      </div>
                    </div>
                    <p>11/20/2021</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse deleniti itaque velit explicabo at eum incidunt vel
                      reprehenderit maxime eos facere ut pariatur voluptas aut,
                      porro quia molestias sequi cupiditate!
                    </p>
                  </div>
                </div>
                <div className="review1 d-flex mb-4">
                  <div className="reviewimg me-3">
                    <img src="./Images/author-3.png" alt="" />
                  </div>
                  <div className="review-text">
                    <div className="review-name d-flex">
                      <h6 className="me-3 fw-bold text-secondary">
                        Rosie Silva
                      </h6>
                      <div
                        className="star1 d-flex me-3"
                        style={{ width: "85px" }}
                      >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill whitestar"></i>
                      </div>
                    </div>
                    <p>11/20/2021</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse deleniti itaque velit explicabo at eum incidunt vel
                      reprehenderit maxime eos facere ut pariatur voluptas aut,
                      porro quia molestias sequi cupiditate!
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviewform">
                <h2>Add a review</h2>
                <div className="review-form">
                  <h6 className="pt-4">Review:</h6>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6 review1 mt-3">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 review1 mt-3">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12 review2 mt-4">
                        <textarea
                          placeholder="Comment"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="col-md-12 mt-4">
                        <div className="review-btn">
                          <button className="btn rounded-pill">
                            POST COMMENT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="form-check mt-4 mb-0">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-secondary"
                      for="exampleCheck1"
                    >
                      NOTIFY ME OF NEW POSTS BY EMAIL.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row mt-5">
 <div className="headtext text-center pt-5">
   <h3 className="fw-light"><i>12 other products in the same category:</i></h3>
   <h2 className="fw-bolder mb-3">OTHER PRODUCTS</h2>
   <p>
     <img src="./Images/hr.webp" alt="" />
   </p>
 </div>
</div> */}
      {/* <div className="row mt-4 mb-5">
 <div className="col-lg-4 mb-5">
   <div className="card">
     <div className="position-relative cardimg">
     <a href="#">
       <img src="./Images/product-1.jpg" className="card-img-top po abc" alt="./Images.">
       <img src="./Images/product-01.jpg" className="card-img-top po hoverimg abc" alt="">
       <span className="badge bg-danger position-absolute">-25%</span>
     </a> 
     <div className="producticon">
       <a href="#" className="icon text-decoration-none shadow-sm">
         <i className="bi bi-suit-heart"></i>
       </a>
       <a href="#" className="icon1 text-decoration-none shadow-sm">
         <i className="bi bi-arrow-repeat"></i>
       </a>
       <a href="#" className="icon2 text-decoration-none shadow-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i className="bi bi-search"></i>
       </a> 
       <a href="#" className="icon3 text-decoration-none shadow-sm">
         <i className="bi bi-handbag"></i>
       </a>
     </div>
   </div>
     <div className="card-body  producttext">
       <h6 className="text-center">Originals Kaval Windbreaker Winter Jacket</h6>
       <div className="text-center">
         <div className="text">
             <p><a href="#" className="text-decoration-none text-secondary"> Studio Design</a></p>
         </div>
       <div className="d-flex justify-content-center">
         <p className="text-secondary text-decoration-line-through">$23.90</p>
         <span className="ps-2">$19.12</span>
       </div>
        </div>
     </div>
   </div>
 </div>
 <div className="col-lg-4 mb-5">
   <div className="card">
     <div className="position-relative cardimg">
     <a href="#">
       <img src="./Images/product-2.jpg" className="card-img-top po abc" alt="./Images.">
       <img src="./Images/product-02.jpg" className="card-img-top po hoverimg abc" alt="./Images.">
       <span className="badge bg-success position-absolute">New</span> 
     </a> 
     <div className="producticon">
       <a href="#" className="icon text-decoration-none shadow-sm">
         <i className="bi bi-suit-heart"></i>
       </a>
       <a href="#" className="icon1 text-decoration-none shadow-sm">
         <i className="bi bi-arrow-repeat"></i>
       </a>
       <a href="#" className="icon2 text-decoration-none shadow-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i className="bi bi-search"></i>
       </a> 
       <a href="#" className="icon3 text-decoration-none shadow-sm">
         <i className="bi bi-handbag"></i>
       </a>
     </div>
   </div>
     <div className="card-body pb-4 producttext">
       <h6 className="text-center">Madden By Steve Madden Cale 6</h6>
       <div className="text-center">
         <div className="text">
           <p><a href="#" className="text-decoration-none text-secondary"> Studio Design</a></p>
       </div>
       <div className="d-flex justify-content-center">
         <span className="ps-2 pb-2">$11.12</span>
       </div>
        </div>
     </div>
   </div>
 </div>
 <div className="col-lg-4 mb-5">
   <div className="card">
     <div className="position-relative cardimg ">
     <a href="#">
       <img src="./Images/product-3.jpg" className="card-img-top po abc" alt="./Images.">
       <img src="./Images/product-03.jpg" className="card-img-top po hoverimg abc" alt="./Images.">
       <span className="badge bg-success position-absolute">New</span>
     </a> 
     <div className="producticon">
       <a href="#" className="icon text-decoration-none shadow-sm">
         <i className="bi bi-suit-heart"></i>
       </a>
       <a href="#" className="icon1 text-decoration-none shadow-sm">
         <i className="bi bi-arrow-repeat"></i>
       </a>
       <a href="#" className="icon2 text-decoration-none shadow-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i className="bi bi-search"></i>
       </a> 
       <a href="#" className="icon3 text-decoration-none shadow-sm">
         <i className="bi bi-handbag"></i>
       </a>
     </div>
   </div>
     <div className="card-body  producttext">
       <h6 className="text-center">Water And Wind Resistant Insulated Jacket</h6>
       <div className="text-center">
         <div className="text">
           <p><a href="#" className="text-decoration-none text-secondary"> Studio Design</a></p>
       </div>
       <div className="d-flex justify-content-center">
         <span className="ps-2 pb-3">$11.12</span>
       </div>
        </div>
     </div>
   </div>
 </div>
</div>
</div>
</div>
        <footer className="footerbg py-5">
         <div className="container p-0">
           <div className="row mb-5 w-100">
             <div className="col-lg-5 ">
               <div className=" mt-4">
                 <div className="footernews">
                   <h3>LET'S KEEP IN TOUCH</h3>
                   <p className="m-0">Sign up for our e-mail to get latest news.</p>
                     <div className="input-group footerinput mt-5">
                       <input type="text" className="form-control shadow-none bg-transparent" placeholder="Your email address" aria-label="Your email address" aria-describedby="button-addon2">
                       <a href="#" className="btn btn-outline-secondary" type="button" id="button-addon2">SIGN UP</a>
                     </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-3 col-sm-6">
               <div className="mt-4">
                 <div className="footerabt">
                   <h4>ABOUT US</h4>
                   <div className="abtinfo">
                     <p className="mb-0">M-F 9am-5pm EST</p>
                     <div className="aboutlist pt-2">
                       <div className="singlelist d-flex pt-4">
                         <i className="bi bi-geo-alt me-3"></i>
                         <p>Fox Mountain Rd, South Fork, CO 81154, USA</p>
                       </div>
                       <div className="singlelist d-flex">
                         <i className="bi bi-telephone me-3"></i>
                         <a href="#" className="text-decoration-none contact_text">
                           <p>+0123.456.8386</p>
                         </a>
                       </div>
                       <div className="singlelist d-flex">
                         <i className="bi bi-envelope me-3"></i>
                         <a href="#" className="text-decoration-none contact_text">
                           <p>support@example.com</p>
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-2 col-sm-3 col-6">
               <div className="mt-4">
                 <div className="footerinfo">
                   <h4>INFORMATION</h4>
                     <ul className="pt-4 list-unstyled">
                       <li className="listtext">
                         <a href="#" className="text-decoration-none">Legal Notice</a>
                       </li>
                       <li className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">About Us</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">Contact Us</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">Sitemap</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">Stores</a>
                       </li>
                     </ul>
                 </div>
               </div>
             </div>
             <div className="col-lg-2 col-sm-3 col-6">
               <div className="mt-4">
                 <div className="footerinfo">
                   <h4>CUSTOM LINKS</h4>
                     <ul className="pt-4 list-unstyled">
                       <li className="listtext">
                         <a href="#" className="text-decoration-none">Price Drop</a>
                       </li>
                       <li className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">New Products</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">Best Sales</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">Login</a>
                       </li>
                       <li  className="mt-2 listtext">
                         <a href="#" className="text-decoration-none">My Account</a>
                       </li>
                     </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="pb-2">
           <div className="container">
             <div className="row d-flex justify-content-end">
               <div className="col-lg-3 ">
                <div className="footericon">
                 <a href="" className="text-decoration-none text-center icons"> 
                   <i className="bi bi-facebook"></i>
                 </a>
                 <a href=""  className="text-decoration-none text-center icons">
                   <i className="bi bi-twitter"></i>
                 </a>
                 <a href=""  className="text-decoration-none text-center icons">
                   <i className="bi bi-youtube"></i>
                 </a>
                </div>
               </div>
               <div className="col-lg-9 pe-0 d-flex justify-content-end">
                 <div className="d-flex mb-2">
                   <div className="copyright">
                     <p>
                       Copyright 2021 ©
                     <a href="#" className="text-decoration-none copytext">HasThemes .</a>
                     All Rights Reserved
                     </p>
                   </div>
                   <div className="payment">
                     <img src="./Images/payment.png" alt="">
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </footer>
       <a href="#" className="backtotop" style="display: inline;">
         <i className="bi bi-arrow-up"></i>
        </a>
      
       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-xl">
           <div className="modal-content">
             <div className="modal-header border-bottom-0">
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <div className="row mb-5">
                 <div className="col-lg-6">
                   <div className="modalimg">
                     <div className="tab-content" id="myTabContent">
                       <div className="tab-pane fade show active ps-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                         <img src="./Images/shop-single-01.jpg" alt="" style="width: 470px;">
                         <span className="badge modal-badge position-absolute">New</span>
                       </div>
                       <div className="tab-pane fade ps-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                         <img src="./Images/shop-single-02.jpg" alt="" style="width: 470px;">
                         <span className="badge modal-badge position-absolute">New</span>
                       </div>
                       <div className="tab-pane fade ps-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                         <img src="./Images/shop-single-003.jpg" alt="" style="width: 470px;">
                         <span className="badge modal-badge position-absolute">New</span>
                       </div>
                       <div className="tab-pane fade ps-4" id="service" role="tabpanel" aria-labelledby="service-tab">
                         <img src="./Images/shop-single-04.jpg" alt="" style="width: 470px;">
                         <span className="badge modal-badge position-absolute">New</span>
                       </div>
                     </div>
                     <ul className="nav nav-tabs border-bottom-0 ms-3" id="myTab" role="tablist">
                       <li className="nav-item me-4 mt-3 ">
                         <a href="#" aria-label="Previous">
                           <i className="bi bi-chevron-left"></i>
                         </a>
                       </li>
                       <li className="nav-item modal-bar me-4" role="presentation">
                         <button className="nav-link active modal-fruit1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                           <img src="./Images/product-1.jpg" alt="" style="width: 80px;">
                         </button>
                       </li>
                       <li className="nav-item modal-bar me-4" role="presentation">
                         <button className="nav-link modal-fruits" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                           <img src="./Images/product-01.jpg" alt="" style="width: 80px;">
                         </button>
                       </li>
                       <li className="nav-item modal-bar me-4" role="presentation">
                         <button className="nav-link modal-fruits" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                           <img src="./Images/product-05.jpg" alt="" style="width: 80px;">
                         </button>
                       </li>
                       <li className="nav-item modal-bar me-4" role="presentation">
                         <button className="nav-link modal-fruits" id="service-tab" data-bs-toggle="tab" data-bs-target="#service" type="button" role="tab" aria-controls="service" aria-selected="false">
                           <img src="./Images/shop-single-04.jpg" alt="" style="width: 80px;">
                         </button>
                       </li>
                       <li className="nav-item me-2 mt-3">
                         <a href="#" aria-label="Previous">
                           <i className="bi bi-chevron-right"></i>
                         </a>
                       </li>
                     </ul>       
                   </div>
                 </div>
                 <div className="col-lg-6">
                   <div className="modal-title">
                     <h3 className="fw-bold mb-3">
                     Juicy Couture Juicy Quilted Terry Track Jacket
                     </h3>
                   </div>
                   <div className="modaltext">
                     <p>
                       Reference: 
                       <span>Demo</span> 
                     </p>
                     <div className="review d-flex">
                       <div className="star d-flex me-3" style="width: 85px;" >
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill whitestar"></i>
                       </div>
                       <div className="me-3">
                         <a href="#" className="text-decoration-none text-black">
                           <i className="bi bi-chat-dots"></i>
                           Read reviews
                           <span>(3)</span>
                         </a>
                       </div>
                           <div>
                             <a href="#" className="text-decoration-none text-black">
                               <i className="bi bi-pencil-square"></i>
                               Write a review
                             </a>
                           </div>
                     </div>
                     <div className="productprice mt-3">
                       <span className="oldprice">$35.90</span>
                       <span className="newprice">$28.72</span>
                       <span className="offer">Save 20%</span>
                     </div>
                     <div className="description py-3">
                       <ul className="list-unstyled text-secondary">
                         <li>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.</li>
                         <li>Part of the Kaval Collection.</li>
                         <li>Regular fit is eased, but not sloppy, and perfect for any activity.</li>
                         <li>Plain-woven jacket specifically constructed for freedom of movement.</li>
                       </ul>
                     </div>
                     <div className="pt-3 d-flex">
                       <div className="productcart me-5">
                         <button type="button" className="sub1">
                           <i className="bi bi-chevron-up"></i>
                         </button>
                         <input type="text" value="1">
                         <button type="button" className="sub">
                           <i className="bi bi-chevron-down"></i>
                         </button>
                       </div>
                       <div className="cartbutton">
                         <a href="#" className="btn rounded-pill">ADD TO CART</a>
                       </div>
                     </div>
                     <div className="add pt-4">
                       <span className="pe-4 addtext">
                         <a href="#" className="text-decoration-none text-secondary infotext">
                         <i className="bi bi-heart pe-2"></i>Add to wishlist
                         </a>
                       </span>
                       <span className="addtext">
                         <a href="#" className="text-decoration-none text-secondary infotext">
                         <i className="bi bi-shuffle pe-2"></i>Add to compare
                         </a>
                       </span>
                     </div>
                     <div className="d-flex share pt-3">
                       <p className="pe-3">SHARE</p>
                       <ul className="list-unstyled d-flex">
                         <li className="shareicon">
                           <a href="#"> <i className="bi bi-facebook pe-4 text-decoration-none"></i></a>
                          </li>
                          <li className="shareicon">
                           <a href="#"> <i className="bi bi-twitter pe-4 text-decoration-none"></i></a>
                          </li>
                          <li className="shareicon">
                           <a href="#"> <i className="bi bi-pinterest pe-4 text-decoration-none"></i></a>
                          </li>
                          <li className="shareicon">
                           <a href="#"><i className="bi bi-linkedin pe-4 text-decoration-none"></i></a>
                          </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

</div> */}
    </div>
  );
};

export default SingleProduct;
