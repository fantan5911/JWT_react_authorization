import {Router} from "express";
import UserController from "./User/UserController";

const router = Router();

app.post("/register", UserController.Register);



export default router;