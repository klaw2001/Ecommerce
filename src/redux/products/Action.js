import axios from "axios";

export const getProductsNewArr = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTSARR_PENDING" });
    axios
      .get("http://localhost:8000/products/get-products")
      .then((res) => {
        dispatch({ type: "GET_PRODUCTSARR_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_PRODUCTSARR_FAILED", payload: err.message });
      });
  };
};

export const getSingleProduct = (productID) => {
  return (dispatch) => {
    dispatch({ type: "GET_SINPRODUCT_PENDING" });
    axios
      .get(`http://localhost:8000/products/get-single-product/${productID}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_SINPRODUCT_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_SINPRODUCT_FAILED", payload: err.message });
      });
  };
};
