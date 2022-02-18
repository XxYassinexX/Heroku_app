import mongoose from "mongoose";

// import comment from './commentmodel.js'
const commentSchema = mongoose.Schema({
  postid: String,
  userid: String,
  username: String,
  message: String,
  img: String,
});

const postSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    img: String,

    comments: [commentSchema],
  },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
