import express from "express";
import { createDonation,getAllDonations } from "../controllers/user.controller.js";

const userRouter = express.Router();

// For creating donation info in DB
userRouter.post("/add-donation", createDonation);

// For Get all donation info 
userRouter.get("/all-donations", getAllDonations); 

export default userRouter;
