import {check,validationResult} from "express-validator";

class Validator {

static validateInput=(req,res,next)=>{

const errors =validationResult(req);
if(!errors.isEmpty()){
    const errorMessage=errors.errors.map((err)=>err.msg);
    return res.status(400).json({message: errorMessage});
}
return next();
};

static newAccountRules(){
    return[
        check("email","email is invalid").isEmail(),
        check("password","password is not strong").isStrongPassword(),
        check("lastName","Last name should be valid").trim().isAlpha(),
        check("firstName","first name should be valid").trim().isAlpha()
        
       
        
    ];

}
static newTourRules(){
return[
    check("tourName","tour name should be valid").trim().isAlpha(),
check("gender","gender should be among male,female,other,not-say").trim().isIn(["male","female","other","not-say"]),
check("price","price should be valid").trim().isAlphanumeric(),
check("seats","seats should be valid").trim().isNumeric(),
check("dueDate","dueDate should be valid").trim().isDate(),
check("dateScheduled","dateScheduled should be valid").trim().isDate()
];


}
}

export default Validator;