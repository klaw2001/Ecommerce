import axios from "axios";

export const getCategory = () => {
  return (dispatch) => {
    dispatch({ type: "GET_CATEGORY_PENDING" });
    axios
      .get("http://localhost:8000/category/get-categories")
      .then((res) => {
        console.log(res)
        dispatch({ type: "GET_CATEGORY_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_CATEGORY_FAILED", payload: err.message });
      });
  };
};
