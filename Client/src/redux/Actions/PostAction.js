import axios from "axios";
import { GET_MY_POSTS, GET_ONE_POST, GET_POSTS } from "../Types/PostTypes";

export const getallposts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/AllPosts");
    dispatch({ type: GET_POSTS, payload: res.data.postsList });
  } catch (error) {
    console.log(error);
  }
};

export const getmyposts = () => async (dispatch) => {
  // const config = {
  //   headers: {
  //     ["auth-token"]: localStorage.getItem("token"),
  //   },
  // };
  try {
    const res = await axios.get("http://localhost:5000/api/posts/get_posts");
    dispatch({ type: GET_MY_POSTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getOnepost = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/api/posts/OnePost/${id}`, config);
    dispatch({ type: GET_ONE_POST, payload: res.data.postToFind });
  } catch (error) {
    console.log(error);
  }
};

export const addOnePost = (newpost) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/posts/create_post",
      newpost,
      config
    );
    console.log(res.data.newPost);
    // dispatch(getallposts());
    console.log(res.data.postsList);
  } catch (error) {
    console.log(error);
  }
};
export const addOneComment = (newpost) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/posts/add_comment",
      newpost,
      config
    );
    dispatch(getmyposts());
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts/delete_post`,
      id,
      config
    );
    dispatch(getmyposts());
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (post) => async (dispatch) => {
  const config = {
    headers: {
      ["auth-token"]: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(`http://localhost:5000/api/posts/modify_post`, post, config);
    dispatch(getmyposts());
  } catch (error) {
    console.log(error);
  }
};
