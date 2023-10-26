import React from "react";

const CartTable = ({ cartItems }) => {
  return (
    <div className="container py-5">
      <div className="cartcontent">
        <div className="table-responsive carttable">
          <table className="table mb-0">
            <thead>
              <tr>
                <th className="productsr">Image</th>
                <th className="productinfo">Product Information</th>
                <th className="productquantity">Quantity</th>
                <th className="product-price">Total Price</th>
                <th className="productaction">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="productsr">
                    <img
                      src={item.image}
                      style={{ width: "100%" }}
                      alt={item.name}
                    />
                  </td>
                  <td className="productinfo">
                    <h6 className="name">
                      <a href={item.link} className="text-decoration-none">
                        {item.name}
                      </a>
                    </h6>
                    <div className="productprice">
                      <span className="oldprice">{item.oldPrice}</span>
                      <span className="newprice">{item.newPrice}</span>
                      <span className="offer">Save {item.discount}</span>
                    </div>
                    <div className="product-size text-secondary">
                      <p className="mb-0">{item.size}</p>
                      <p className="mb-0">{item.color}</p>
                    </div>
                  </td>
                  <td className="productquantity">
                    <div className="productcart d-inline-flex">
                      <button type="button" className="sub1">
                        <i className="bi bi-chevron-up"></i>
                      </button>
                      <input type="text" value={item.quantity} />
                      <button type="button" className="sub">
                        <i className="bi bi-chevron-down"></i>
                      </button>
                    </div>
                  </td>
                  <td className="product-price text-secondary">
                    <span>{item.totalPrice}</span>
                  </td>
                  <td className="productaction">
                    <span>
                      <i className="bi bi-trash3"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="calculate">
              <h4 className="title">Calculate Shipping</h4>
              <p className="text-secondary m-0">Estimate your shipping fee *</p>
              <div className="cartform">
                <p className="text-secondary ">Calculate Shipping</p>
                <form action="#" className="mt-5">
                  <select className="form-select" style={{ height: "50px" }}>
                    <option selected className="bg-secondary text-white">
                      Select a country.
                    </option>
                    {/* Add more options here */}
                  </select>
                  <div className="mt-4">
                    <select className="form-select" style={{ height: "50px" }}>
                      <option selected className="bg-secondary text-white">
                        Select an option.
                      </option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode/ziip"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="ship-btn mt-4">
                    <a href="#" className="text-decoration-none btn rounded-pill">
                      UPDATE TOTALS
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="coupon">
              <h4 className="title">Coupon Code</h4>
              <p className="text-secondary ">
                Enter your coupon code if you have one.
              </p>
              <div className="cart-form">
                <form action="#">
                  <input
                    type="text"
                    className="form-control mt-5"
                    placeholder="Enter your coupon code."
                    style={{ height: "50px" }}
                  />
                </form>
                <div className="ship-btn mt-4">
                  <a href="#" className="text-decoration-none btn rounded-pill">
                    APPLY COUPON
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-totals">
              <h4 className="title">Cart totals</h4>
              <div className="carttotal">
                <table>
                  <tbody>
                    <tr className="border-bottom">
                      <td>
                        <p className="value py-1 pe-5 mb-0">Subtotal</p>
                      </td>
                      <td>
                        <p className="value1 py-1 mb-0">£600.00</p>
                      </td>
                    </tr>
                    <tr className="pb-1 border-bottom">
                      <td>
                        <p className="value py-1 pe-5 mb-0">Shipping</p>
                      </td>
                      <td className="py-1">
                        <div className="form-check m-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="gridRadios1"
                          >
                            Flat Rate
                          </label>
                        </div>
                        <div className="form-check m-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="gridRadios2"
                          >
                            Free Shipping
                          </label>
                        </div>
                        <div className="form-check m-0 ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios3"
                            value="option3"
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="gridRadios3"
                          >
                            Local Pickup
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="value py-1 pe-5 mb-0">Total</p>
                      </td>
                      <td>
                        <p className="value mb-0 py-1">£600.00</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ship-btn mt-4">
                <a href="#" className="text-decoration-none btn rounded-pill">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
