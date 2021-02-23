import express from "express";
import { signup, login, getProfile, getProfileById } from "../userController";

export const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/profile", getProfile)
userRouter.get("/:id", getProfileById)