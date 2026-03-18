import express from "express";
import { currentUser, login, register } from "../controllers/userController";

const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/current",validateToken,currentUser);