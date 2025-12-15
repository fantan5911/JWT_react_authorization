import {Router} from "express";
import UserController from "./User/UserController.js";

const router = Router();

router.post("/users/register", UserController.Register);
router.post("/users/login", UserController.Login);



export default router;