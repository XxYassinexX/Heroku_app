import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  addComment,
  modifyPost,
} from "../controllers/posts.js";
import adminAuth from "../middleware/adminAuthmiddleware.js";
import auth from "../middleware/userAuthMiddleware.js";

const routerPosts = express.Router();

routerPosts.get("/get_posts", getPosts);
routerPosts.post("/create_post", adminAuth, createPost);
routerPosts.post("/delete_post", adminAuth, deletePost);
routerPosts.post("/add_comment", auth, addComment);
routerPosts.post("/modify_post", adminAuth, modifyPost);

export default routerPosts;
