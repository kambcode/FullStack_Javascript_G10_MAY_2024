const { Router } = require("express");
const { movies } = require("./data");


const router = Router();

router.get("/", function (req, res) {
  res.send("Hello World");
});

router.get("/movies", (req, res) => {
  res.json(movies);
});

router.get("/movies/:id", (req, res) => {

    console.log(req.params.id);

    const id = Number(req.params.id);

    const movie =  movies.find(movie => movie.id === id);

    if (!movie) return res.status(404).json({message: "Movie not found"});

    res.json(movie);
});

router.post("/movies", (req, res) => {

  console.log(req.body);

  if (!req.body.title){
    return res.status(400).json({message: 'Title is required'})
  }

  const id = movies.length +1;

  const movie = {
    ...req.body,
    id,
  }
 
  movies.push(movie);
  res.status(201).json(movie);
});

router.put("/movies/:id", (req, res) => {

    const id = Number(req.params.id);

    const {title, directorId, genre, releaseYear} = req.body;

    const movie = movies.find(movie => movie.id === id);

    if (!movie) return res.status(404).json({message: 'Movie not found'});

    if (!title){
        return res.status(400).json({message: 'Title is required when you updated a movie'})
    }

    movie.title = title ? title : movie.title;
    movie.directorId = directorId ? directorId : movie.directorId;
    movie.genre = genre ? genre : movie.genre;
    movie.releaseYear = releaseYear ? releaseYear : movie.releaseYear;
  

    res.status(201).json(movie);
});
  

router.delete("/movies/:id", (req, res) => {

    const id = parseInt(req.params.id);

    console.log({id});

    const idxMovie = movies.findIndex(movie => movie.id === id);

    if (idxMovie === -1) return res.status(404).json({message: 'Movie Not found'});

    const deleteMovies = movies.splice(idxMovie, 1);

    res.json(deleteMovies[0]);
})


module.exports = router;