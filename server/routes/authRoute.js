import express from "express";
import { currentUser, login, register } from "../controllers/userController.js";
import validateToken from "../middleware/validateToken.js"

const authRouter=express.Router();

authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.get("/current",validateToken,currentUser);

export default authRouter;