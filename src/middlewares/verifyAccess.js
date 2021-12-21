
const verifyAccess=(requiredRole)=>{

return async(req,res,next)=>{
    try{
const{role}=required
if(requiredRole!=role){
    return res.status(401).json({error:"Unauthorized! You don't have access to this api"})
}
return next()
   
} catch(err){
console.log(err)
    }
}

}
export default verifyAccess;