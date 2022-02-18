import { GET_MY_POSTS, GET_ONE_POST, GET_POSTS } from "../Types/PostTypes";

const InitialState = {
  Posts: null,
  MyPosts: null,
  errors: null,
  Post: null,
};

const PostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, Posts: action.payload };
    // case FAIL_POSTS:
    //     return {...state, errors : action.payload.errors}
    case GET_MY_POSTS:
      return { ...state, MyPosts: action.payload };
    case GET_ONE_POST:
      return { ...state, Post: action.payload };

    default:
      return state;
  }
};

export default PostReducer;
