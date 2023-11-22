const initialState = {
    cart: [],
    success: false,
    error: null,
    isLoading: false,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CART_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "ADD_CART_SUCCESS":
        return {
          ...state,
          isLoading: false,
          cart: [...state.cart, action.payload],
        };
      case "ADD_CART_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "GET_CART_PENDING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "GET_CART_SUCCESS":
        return {
          ...state,
          isLoading: false,
          cart: action.payload,
        };
      case "GET_CART_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "DELETE_CART_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "DELETE_CART_SUCCESS":
        const updatedCart = state.cart.filter(
          (item) => item._id !== action.payload
        );
        return {
          ...state,
          isLoading: false,
          cart: updatedCart,
        };
      case "DELETE_CART_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "DELETE_ALLCART_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "DELETE_ALLCART_SUCCESS":
        return {
          ...state,
          isLoading: false,
          cart: [],
          success: true,
        };
      case "DELETE_ALLCART_FAILED":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          success: false,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  