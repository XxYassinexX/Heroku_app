import router from "express";
const userRoutes = router.Router()
import {signup, signin,updateUser, getUser,deleteUser, getUsers} from '../controllers/usercontroller.js'
import adminAuth from '../middleware/adminAuthmiddleware.js'; 
import auth from "../middleware/userAuthMiddleware.js";

userRoutes.post('/signup',signup);
userRoutes.post('/signin',signin);
userRoutes.get('/get_user',auth,getUser);
userRoutes.post('/update_user',auth,updateUser);
userRoutes.post('/delete_user', adminAuth, deleteUser);
userRoutes.get('/get_users',adminAuth,getUsers);


export default userRoutes;