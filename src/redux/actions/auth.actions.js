import * as type from "../constants/auth.constants";

import api from "../../apiService";

const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: type.REGISTER_REQUEST });
    const { data } = await api.post("/users", { email, password });
    dispatch({ type: type.REGISTER_SUCCESS, payload: data });
    // window.location = process.env.REACT_APP_FRONTEND_URL;
  } catch (error) {
    console.log(error);
  }
};

const authActions = {
  register,
};

export { authActions };
