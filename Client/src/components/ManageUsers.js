import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarList from "./Navbar/Navigation";
import './ManageUsers.css'
import { useNavigate } from "react-router-dom";
import { getallUsers, deleteUser } from "../redux/Actions/UserActions";

function ManageUsers() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const users = useSelector((state) => state.UserReducer.users);
  useEffect(() => {
    dispatch(getallUsers());
  }, []);
  return (
    <div>
      <NavBarList />
      <div className="userscontainer">
        {users &&
          users.sucess.map((user) => (
            <div className="users1">
              User
             <div > Firstname : {user.firstname} </div>
            <div > Lastname :  {user.lastname} </div>
            <div > Email: {user.email}</div>
              <img src={user.url} alt="" />
              <button className="deletebut"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    deleteUser({
                      id: user._id,
                    })
                  );
                }}
              >
                DELETE
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ManageUsers;
