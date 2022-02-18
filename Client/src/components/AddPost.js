import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOnePost } from "../redux/Actions/PostAction";
import NavBarList from "./Navbar/Navigation";
import "./AddPost.css";

function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [img, setImg] = useState("");
  

  return (
    <div>
      <NavBarList/>
      <div></div>
    <div class="form">
      <div class="title">Add Post</div>
      <div class="subtitle"></div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " onChange={(e) => setTitle(e.target.value)}/>
        <div class="cut"></div>
        <label
          for="Title"
          class="placeholder"
          
        >
          Title
        </label>
      </div>
      <div class="input-container ic1">
        <input
          id="lastname"
          class="input"
          type="text"
          placeholder=" "
          onChange={(e) => {console.log('dqdqs');setMessage(e.target.value)}}
        />
        <div class="cut"></div>
        <label
          for="Postcontent"
          class="placeholder"
          
        >
          Post Content
        </label>
      </div>
      <div class="input-container ic1">
        <input
          id="lastname"
          class="input"
          type="text"
          placeholder=" "
          onChange={(e) => {setImg(e.target.value)}}
        />
        <div class="cut"></div>
        <label
          for="Postcontent"
          class="placeholder"
          
        >
          Post Image
        </label>
      </div>

      <button
        type="text"
        class="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addOnePost({
              title: title,
              message: message,
              img: img
            })
          );
        }}
      >
        Add Post
      </button>
    </div>
    </div>
  );
}

export default AddPost;
