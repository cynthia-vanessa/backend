import tourInfos from"../models/tour";

class TourController{
//create user in db
static async createTour(req,res){
    const tours=await tourInfos.create(req.body);

if(!tours){
    return res.status(404).json({error:"tour not registered"})
}

return res
.status(200)
.json({message:"tour created successfully",data: tours});

}
static async getAllTours(req,res){
    const tours=await tourInfos.find();

if(!tours){
    return res.status(404).json({error:"tour not registered"})
}

return res
.status(200)
.json({message:" successfullly retrieved tours",data: tours});

}

}
export default TourController; 