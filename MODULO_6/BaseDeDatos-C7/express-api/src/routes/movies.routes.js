const { Router } = require("express");

const connection = require("../db/sequelize");
const { internalError } = require("../helper/http-response");

const router = Router();

router.get("/movies", async (req, res) => {
  try {
    const movies = await connection.query(
      `
      SELECT * FROM movies;
    `,
      {
        type: connection.QueryTypes.SELECT,
      }
    );
    res.json(movies);
  } catch (error) {
    internalError(error, res);
  }
});

router.get("/movies/:id", async (req, res) => {

  try {
    
    console.log(req.params.id);

    const id = Number(req.params.id);

    const [movie] = await connection.query(`
      SELECT * FROM movies
      WHERE id = :id;
    `, {
      replacements: { id },
      type: connection.QueryTypes.SELECT,
    })


    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json(movie);
    
  } catch (error) {
    internalError(error, res);
  }
});

router.post("/movies", async (req, res) => {
  console.log(req.body);

  try {
    const { title, genre, releaseYear } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const [movies] = await connection.query(
      `
    INSERT INTO movies (title, genre, releaseYear)
    VALUES (:title, :genre, :releaseYear)
    RETURNING *;
  `,
      {
        replacements: { title, genre, releaseYear },
        type: connection.QueryTypes.INSERT,
      }
    );

    if (!movies.length)
      return res.status(400).json({ message: "Movie was not created" });

    res.status(201).json(movies[0]);
  } catch (error) {
    internalError(error, res);
  }
});

router.put("/movies/:id", async (req, res) => {
  
  try {
    
    const id = Number(req.params.id);
  
    const { title,genre, releaseYear } = req.body;
  
    if (!title) {
      return res
        .status(400)
        .json({ message: "Title is required when you updated a movie" });
    }
  
    const [movies] = await connection.query(`
      UPDATE movies
      SET title  = :title,
          genre = :genre,
          releaseYear = :releaseYear
      WHERE id = :id
      RETURNING *;
    `, {
      replacements: {title, genre, releaseYear, id },
      type: connection.QueryTypes.UPDATE,
    })
  
  
    if (!movies.length) return res.status(404).json({ message: "Movie not found" });
  
    res.status(201).json(movies[0]);
  } catch (error) {
    internalError(error, res);
  }
  
});

router.delete("/movies/:id", async (req, res) => {

  try {
    const id = parseInt(req.params.id);

    const [movie] = await connection.query(`
      DELETE FROM movies
      WHERE id = :id
      RETURNING *;
    `, {
      replacements: { id },
      type: connection.QueryTypes.DELETE,
    })
  
    if (!movie) return res.status(404).json({message: 'Movie not found'});
  
    res.json(movie);
  } catch (error) {
    internalError(error, res);
  }

 
});

module.exports = router;
