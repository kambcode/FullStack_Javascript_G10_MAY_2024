import { internalError } from "../helper/http-response.js";
import { Movie } from "../models/movies.model.js";

export class MovieController {
  getMovies = async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (error) {
      internalError(error, res);
    }
  };

  getMovieById = async (req, res) => {
    try {
      console.log(req.params.id);

      const id = Number(req.params.id);

      const movie = await Movie.findByPk(id);

      if (!movie) return res.status(404).json({ message: "Movie not found" });

      res.json(movie);
    } catch (error) {
      internalError(error, res);
    }
  };

  createMovie = async (req, res) => {
    console.log(req.body);

    try {
      const { title, genre, releaseYear } = req.body;

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const movie = await Movie.create({
        title,
        genre,
        releaseYear,
      });

      if (!movie)
        return res.status(400).json({ message: "Movie was not created" });

      res.status(201).json(movie);
    } catch (error) {
      internalError(error, res);
    }
  };

  updateMovie = async (req, res) => {
    try {
      const id = Number(req.params.id);

      const { title, genre, releaseYear } = req.body;

      if (!title) {
        return res
          .status(400)
          .json({ message: "Title is required when you updated a movie" });
      }
      /*

      const [result] = await Movie.update(
        {title, genre, releaseYear}, { where: {id}}
      );


      if (!result || result <= 0)
        return res.status(404).json({ message: "Movie not found" });
      */


      const movie = await Movie.findOne({
        where: { id }
      });

      if(!movie ) return res.status(404).json({ message: "Movie not found" });

      movie.set({
        title,
        genre,
        releaseYear,
      });

      await movie.save();


      res.status(200).json(movie);
    } catch (error) {
      internalError(error, res);
    }
  };

  deleteMovie = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const movie = await Movie.findOne({ where: { id } });

      console.log(movie);

      const result = await Movie.destroy({
        where: { id }
      });

      if (!result || result <= 0) return res.status(404).json({ message: "Movie not found" });

      res.json(movie);
    } catch (error) {
      internalError(error, res);
    }
  };
}
