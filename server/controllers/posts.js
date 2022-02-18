import PostMessage from "../models/postMessage.js";
import comment from "../models/commentmodel.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const addComment = async (req, res) => {
  const { postid, message } = req.body;

  const newComment = new comment({
    postid: postid,
    userid: req.userid,
    username: req.username,
    message: message,
  });

  newComment
    .save()
    .then((comment) => {
      PostMessage.findByIdAndUpdate(
        postid,
        { $push: { comments: comment } },
        { new: true, useFindAndModify: false },
        (err, post) => {
          console.log("post", post);
          if (err) {
            return res.status(500).json({ success: false, msg: err.message });
          }
          res.status(200).json({ success: true, comment, post });
        }
      );
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: err.message });
    });
};
export const modifyPost = async (req, res) => {
  const { postid, message } = req.body;

  try {
    PostMessage.findByIdAndUpdate(
      postid,
      { message: message },

      (err, post) => {
        console.log("post", post);
        if (err) {
          return res.status(500).json({ success: false, msg: err.message });
        }
        res.status(200).json({ success: true, comment, post });
      }
    );
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    PostMessage.findByIdAndDelete(req.body.postid, (err, postdeleted) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(200)
          .send({ sucess: `the post ${postdeleted} deleted with sucess` });
      }
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to delete the post" }] });
  }
};
