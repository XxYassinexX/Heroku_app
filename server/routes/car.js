
import router from "express";
const carRouter = router.Router()
import {createCar,modifyCar,deleteCar, getCars,getCar} from '../controllers/carcontroller.js';
import auth from '../middleware/userAuthMiddleware.js';
carRouter.post('/new_car',auth,createCar);
carRouter.post('/modify_car',auth,modifyCar);
carRouter.post('/delete_car',auth,deleteCar);
carRouter.get('/get_cars', auth,getCars);
carRouter.post('/get_car', auth, getCar);

export default carRouter;