import express from "express";
import tourController from "../controllers/tourController";

const tourRouter=express.Router();

tourRouter.post("/create", tourController.createTour)
tourRouter.get("/allTours", tourController.getAllTours)


export default tourRouter;