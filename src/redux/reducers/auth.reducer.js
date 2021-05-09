import * as types from "../constants/auth.constants";

const email = JSON.parse(localStorage.getItem("coderbookUser"));
const initialState = {
  loading: false,
  email: email ? email : "",
  isAuthenticated: !!email,
  redirectToHomePage: !!email,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      localStorage.setItem("coderbookUser", JSON.stringify(payload.email));
      return {
        ...state,
        loading: false,
        email: payload.email,
        isAuthenticated: true,
        redirectToHomePage: true,
      };

    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: true,
        message: "Api request failured",
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
