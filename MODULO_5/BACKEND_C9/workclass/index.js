import express from "express";

const app = express();
const port = 3000;

// /users/:id
// /productos/categoria/cocina/:item
// clientes/:id

app.use(express.json()); //Middleware para convertir JSON's

//route methods (get, post, put, delete)

app.get("/welcome", (req, res) => {
  res.send("hola mundo");
});

//route params /user/:userId (/productos/categorias/cocina/:item)
//(:from-:to) LAX-SFO
app.get("/pokemons/:pokemon/hability/:hability", (req, res) => {
  const { pokemon, hability } = req.params;

  console.log(pokemon, hability);

  res.send("Pokemon");
});

//query params /user?key=value&key=value
app.get("/pokemons/query", (req, res) => {
  const parameters = req.query;

  console.log(parameters);

  res.send("pokemon");
});

//body params
app.post("/pokemons/body", (req, res) => {
  const { name, age } = req.body;

  console.log(name, age);

  res.status(200).send({ message: "body successfull" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//actividad

//    /books/:title

//    /authors/:name

// const books = JSON.stringify([
//     { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
//     { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
//   ]);

//   const authors = JSON.stringify([
//     { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
//     { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
//   ]);
