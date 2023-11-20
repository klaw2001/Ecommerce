const initialState = {
    productsArr: [],
    product: {},
    success: false,
    error: null,
    isLoading: false,
  };
  
  const productsArrReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTSARR_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_PRODUCTSARR_SUCCESS":
        return {
          ...state,
          isLoading: false,
          productsArr: action.payload,
        };
      case "GET_PRODUCTSARR_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "GET_SINPRODUCT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SINPRODUCT_SUCCESS":
        return {
          ...state,
          isLoading: false,
          product: action.payload,
        };
      case "GET_SINPRODUCT_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productsArrReducer;
  