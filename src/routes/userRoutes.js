import express from "express";
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import Datachecker from "../middlewares/datachecker";

const userRouter=express.Router();

userRouter.post("/register",Validator.newAccountRules(),
Validator.validateInput,
Datachecker.isEmailExist,
UserController.createUser
);
userRouter.get("/all", UserController.getAllUsers);
userRouter.post("/login",UserController.userLogin);


export default userRouter;