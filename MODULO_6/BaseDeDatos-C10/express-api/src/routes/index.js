import { Router } from "express";
import artistRoutes from "./artist.routes.js";
import songRoutes from "./song.routes.js";
import autRoutes from "./auth.routes.js";

const router = new Router();


router.use(artistRoutes);
router.use(songRoutes);
router.use(autRoutes);


export default router;