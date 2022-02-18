import jwt from 'jsonwebtoken'; 
import jwt_decode from "jwt-decode";

function auth(req, res, next){
    const token = req.header('auth-token'); 
    if(!token) return res.status(401).send('unauthorised'); 

    try {
        const  decoded = jwt_decode(token);
        const verified = jwt.verify(token, process.env.JWTSIGN)
        req.user = verified;
        req.userid = decoded.id;
        req.username = decoded.firstname

        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}
export default auth;