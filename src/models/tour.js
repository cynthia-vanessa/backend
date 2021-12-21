import mongoose from "mongoose";


const tourSchema= new mongoose.Schema(
    {
tourName:{
type:String,
required:true,
},
tourLocation:{
    type:String,
    required:true,
    enum:["Musanze","Gisenyi","Karongi","Nyanza","Nyungwe"]
},
price:{
    type:Number,
    required:true,
},
seats:{
    type:Number,
    
},
dueDate:{
type:String,
required:true,
},
dateScheduled:{
    type:String,
    required:true,
},
user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
}

  
    
});
tourSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"lastName email address"
    });
    next();

})

    const tour =mongoose.model('Tour',tourSchema);

    export default tour;