import jwt from 'jsonwebtoken'; 
import jwt_decode from "jwt-decode";
import User from'../models/usermodel.js';

function adminAuth(req, res, next){

    const token = req.header('auth-token'); 
    const  decoded = jwt_decode(token);
    if(!token) return res.status(401).send('unauthorised'); 

    try {
        const verified = jwt.verify(token, process.env.JWTSIGN)
        if (verified){
        }
        req.user = verified;

        console.log('here', decoded.role)

         const user = User.findById(decoded.id)
         req.userid = decoded.id;

         if(decoded.role === 'admin'){
             console.log('here', decoded.role)
             next()
         }
         else 
        {
            res.status(401).send('unauthorised')
        }
        
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}
export default adminAuth;