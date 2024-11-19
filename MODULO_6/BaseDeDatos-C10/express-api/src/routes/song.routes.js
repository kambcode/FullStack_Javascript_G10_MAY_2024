import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { SongController } from "../controllers/index.js";


const router = Router();
const controller = new SongController();

router.get("/songs", validateJWT, controller.getSongs);

router.get("/songs/:id", validateJWT, controller.getSongById);

router.get("/songs/artist/:artistId",validateJWT, controller.getSongsByArtist);

router.post("/songs", validateJWT, controller.createSong);

export default router;
