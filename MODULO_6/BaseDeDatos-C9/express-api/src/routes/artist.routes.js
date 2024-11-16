import { Router } from "express";
import { ArtistController } from "../controllers/index.js";

const router = Router();
const controller = new ArtistController();

router.get("/artists", controller.getArtists);

router.get("/artists/:id", controller.getArtistById);

router.post("/artists", controller.createArtist);

router.put("/artists/:id", controller.updateArtist);

router.delete("/artists/:id", controller.deleteArtist);

export default router;
