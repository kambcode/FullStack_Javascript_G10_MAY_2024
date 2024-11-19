import { internalError } from "../helper/http-response.js";
import { Artist, Song } from "../models/index.js";

export class SongController {
  getSongs = async (req, res) => {

    console.log({id: req.user_id});
    try {
      const artists = await Song.findAll();
      res.json(artists);
    } catch (error) {
      internalError(error, res);
    }
  };

  getSongById = async (req, res) => {
    try {
      console.log(req.params.id);

      const id = Number(req.params.id);

      const song = await Song.findByPk(id);

      if (!song) return res.status(404).json({ message: "Song not found" });

      res.json(song);
    } catch (error) {
      internalError(error, res);
    }
  };

  getSongsByArtist = async (req, res) => {
    const artistId = Number(req.params.artistId);

    try {
      const artists = await Song.findAll({
        where: { artistId: artistId},
        include: {
          model: Artist,
        }
      });
      res.json(artists);
    } catch (error) {
      internalError(error, res);
    }
  }

  createSong = async (req, res) => {
    console.log(req.body);

    try {
      const { title, releaseYear, duration, coverUrl, artistId } = req.body;

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const song = await Song.create({
        title,
        releaseYear,
        duration,
        coverUrl,
        artistId
      });

      if (!song)
        return res.status(400).json({ message: "Songs was not created" });

      res.status(201).json(song);
    } catch (error) {
      internalError(error, res);
    }
  };
}
