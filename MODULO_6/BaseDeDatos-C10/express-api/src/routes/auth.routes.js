import { Router } from "express";
import { AuthController } from "../controllers/index.js";

const router = Router();
const controller = new AuthController();

router.post("/sing-up", controller.singUp);

router.post("/login", controller.login);


export default router;
