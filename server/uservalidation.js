/// validation 
const joi = require('@hapi/joi'); 

const userSignupValidation = (requestBody)=> {

    const userValidationSchema = joi.object ({
        firstname: joi.string().min(3).required(),
        lastname: joi.string().min(3).required(), 
        email : joi.string().min(6).email().required(),
        password : joi.string().min(6).required(), 
    
    });
     return userValidationSchema.validate(requestBody); 


}

module.exports = {userSignupValidation}