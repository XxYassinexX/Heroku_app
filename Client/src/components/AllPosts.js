import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarList from "./Navbar/Navigation";
import Footer from "./Footer/Footer"
import jwt_decode from "jwt-decode";
import {
  addOneComment,
  getmyposts,
  deletePost,
  editPost
} from "../redux/Actions/PostAction";
import { Modal, Button } from "react-bootstrap";
import "./AllPosts.css";
import { useNavigate } from "react-router-dom";

function DisplayCars() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const posts = useSelector((state) => state.PostReducer.MyPosts);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ismodifed, setIsModifed] = useState({ postId: null, isModified: false });
  const [value, setValue] = useState();
  const [myid, setID] = useState("");
  console.log(ismodifed);
  let token = localStorage.getItem("token");
  let decoded = token ? jwt_decode(token) : "";

  useEffect(() => {
    dispatch(getmyposts());
  }, []);
  console.log(posts);
  return (
    <div>
      <NavBarList />
      <div>
        {posts &&
          posts.map((post) => (
            <div className="Postcontainer">
              <div className="Field" style={{textAlign:"center", fontSize:"25px" }}> 
                <div style={{fontSize: '13px', color: 'gray'}}> Created at{post.createdAt?post.createdAt.substring(0,post.createdAt.indexOf('T')): "" } </div>
                <div style={{fontSize: '13px', color: 'gray'}}> updated at {post.updatedAt?post.updatedAt.substring(0,post.updatedAt.indexOf('T')): "" } </div>
                {post.title} <div/>

                <br></br>
                {ismodifed.isModified && ismodifed.postId == post._id ?  (
                  <div> 
                  <textarea name="post" rows="7" cols="150" value ={value}  onChange={(e)=> setValue(e.target.value)}>
                 {value}
                  </textarea>
                  </div>
                ) : (
                  <div className="contentfield" style={{margin:"2px 10px" , fontSize:"15px"}}> {post.message} </div>
                )}
              </div>
              <br />
              <img src={post.img} style={{maxWidth:"600px", margin:"20px 20px"}}  />

              <div>
                <div className="Field">
                  {" "}
                  Comments : ({post.comments.length})
                  {!token ? (
                    <span style={{cursor:'pointer' , color:'blue'}} 
                     onClick={() => history("/login")} >
                      {" "}
                      Show Comments
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {token ? (
                  <div>
                    {post.comments.map((com) => (
                      <div className="Field">
                        <div>
                          {com && com.username}
                          <br></br>
                          {com && com.message}
                        </div>
                      </div>
                    ))}
                    <input
                      className="Commentfield"
                      type="text"
                      placeholder="add comment here ..."
                      onChange={(e) => {
                        e.preventDefault();
                        setComment(e.target.value);
                      }}
                    />
                    <button
                      className="Submitbutton"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                          addOneComment({
                            postid: post._id,
                            message: comment,
                          })
                        );
                      }}
                    >
                      Add Comment
                    </button>
                    <div>
                      {token && decoded.role === "admin" ? (
                        <div>
                          {ismodifed.isModified ? (
                            <button
                              className="Submitbutton"
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(
                                    editPost({
                                      postid: post._id,
                                      message: value,
                                    })
                                    
                                  );
                                  setIsModifed({
                                    postId: null,
                                    isModified: false,
                                  });
                                }}>
                              Save post
                            </button>
                          ) :
                          <button
                            className="Submitbutton"
                            onClick={() => {
                              setIsModifed({
                                postId: post._id,
                                isModified: true,
                              });
                              setValue(post.message);
                            }}
                          >
                            Edit Post{" "}
                          </button> }
                          <button
                            className="Submitbutton"
                            onClick={() => {
                              handleShow();
                              setID(post._id);
                          
                            }}
                          >
                            {" "}
                            Delete post{" "}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this post ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  deletePost({
                    postid: myid,
                  })
                );
                handleClose();
              }}
            >
              Yes Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer/>
    </div>
  );
}

export default DisplayCars;
