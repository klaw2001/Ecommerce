import axios from "axios";

export const addToCart = (productID, userID) => {
  return (dispatch) => {
    dispatch({ type: "ADD_CART_PENDING" });
    axios
      .post("http://localhost:8000/cart/add-cart-item", { userID, productID })
      .then((res) => {
        // console.log(res.data.data);
        // console.log(userID, productID);
        dispatch({ type: "ADD_CART_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        // console.log(err, userID, productID);
        dispatch({ type: "ADD_CART_FAILED", payload: err.message });
      });
  };
};

export const getCartItems = (userID) => {
  return (dispatch) => {
    dispatch({ type: "GET_CART_PENDING" });
    axios
      .get(`http://localhost:8000/cart/get-cart-items/${userID}`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: "GET_CART_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_CART_FAILED", payload: err.message });
      });
  };
};

export const deleteCartItems = (cartID) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_CART_PENDING" });
    axios
      .delete(`http://localhost:8000/cart/delete-cart-item/${cartID}`)
      .then((res) => {
        // if(res.status === 200){
        //   getCartItems()
        // }
        dispatch({ type: "DELETE_CART_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_CART_FAILED", payload: err.message });
      });
  };
};
export const deleteAllCartItems = (userID) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_ALLCART_PENDING" });
    axios
      .delete(`http://localhost:8000/cart/delete-all-items/${userID}`)
      .then((res) => {
       
        dispatch({ type: "DELETE_ALLCART_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_ALLCART_FAILED", payload: err.message });
      });
  };
};
