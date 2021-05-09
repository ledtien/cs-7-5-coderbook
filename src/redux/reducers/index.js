import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
});
