import * as type from "../constants/post.constants";

import api from "../../apiService";
import { propTypes } from "react-bootstrap/esm/Image";

const getPosts = (id, body) => async (dispatch) => {
  try {
    dispatch({ type: type.GET_POSTS_REQUEST });
    const { data } = await api.get("/posts");
    dispatch({ type: type.GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.GET_POSTS_FAILURE });
    console.log(error);
  }
};
const getGroupPosts = (groupId) => async (dispatch) => {
  try {
  } catch (error) {}
};
const getUserPosts = (groupId) => async (dispatch) => {
  try {
  } catch (error) {}
};

const createPostComment = (post, commentBody) => async (dispatch) => {
  try {
    const { data } = await api.put("/posts/" + post.id, {
      ...post,
      comments: post.comments.concat({ body: commentBody }),
    });
  } catch (error) {
    console.log(error);
  }
};
const postActions = {
  getPosts,
  getGroupPosts,
  getUserPosts,
  createPostComment,
};

export { postActions };
