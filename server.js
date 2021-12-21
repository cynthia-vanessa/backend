import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes";
import tourRoutes from "./src/routes/tourRoutes";
dotenv.config("./.env")
const app=express();

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/tour",tourRoutes);
app.use("/",(req,res)=> res.status(200).json({




message:"This is Tour Api is not exist"
}));

const dbUrl=process.env.DATABASEURL
mongoose.connect(dbUrl,{
useNewUrlParser:true,

useUnifiedTopology:true,


}).then(()=> console.log("Database connected succcessfully"))
const port= process.env.PORT;
app.listen(port,()=>{


console.log(`Server is running on Port ${port}`);


})
export default app;