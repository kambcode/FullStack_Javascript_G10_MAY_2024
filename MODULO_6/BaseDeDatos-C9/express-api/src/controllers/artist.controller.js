import { internalError } from "../helper/http-response.js";
import { Artist, Song } from "../models/index.js";

export class ArtistController {
  getArtists = async (req, res) => {
    try {
      const artists = await Artist.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Song,
          attributes: ['title', 'releaseYear']
        }
      });
      res.json(artists);
    } catch (error) {
      internalError(error, res);
    }
  };

  getArtistById = async (req, res) => {
    try {
      console.log(req.params.id);

      const id = Number(req.params.id);

      const artist = await Artist.findByPk(id);

      if (!artist) return res.status(404).json({ message: "artist not found" });

      res.json(artist);
    } catch (error) {
      internalError(error, res);
    }
  };

  createArtist = async (req, res) => {
    console.log(req.body);

    try {
      const { name, bio, photoUrl } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Title is required" });
      }

      const artist = await Artist.create({
        name,
        bio,
        photoUrl,
      });

      if (!artist)
        return res.status(400).json({ message: "artist was not created" });

      res.status(201).json(artist);
    } catch (error) {
      internalError(error, res);
    }
  };

  updateArtist = async (req, res) => {
    try {
      const id = Number(req.params.id);

      const { name, bio, photoUrl } = req.body;

      if (!name) {
        return res
          .status(400)
          .json({ message: "Name is required when you updated a artist" });
      }
  
      const artist = await Artist.findOne({
        where: { id }
      });

      if(!artist ) return res.status(404).json({ message: "artist not found" });

      artist.set({
        name,
        bio,
        photoUrl,
      });

      await artist.save();


      res.status(200).json(artist);
    } catch (error) {
      internalError(error, res);
    }
  };

  deleteArtist = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const artist = await Artist.findOne({ where: { id } });

      console.log(artist);

      const result = await Artist.destroy({
        where: { id }
      });

      if (!result || result <= 0) return res.status(404).json({ message: "artist not found" });

      res.json(artist);
    } catch (error) {
      internalError(error, res);
    }
  };
}
