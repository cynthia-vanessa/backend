import express from "express";
import tourController from "../controllers/tourController";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";
const tourRouter=express.Router();

tourRouter.post("/create",
verifyToken,
verifyAccess("admin"),
 tourController.createTour);
tourRouter.get("/allTours", tourController.getAllTours);


export default tourRouter;