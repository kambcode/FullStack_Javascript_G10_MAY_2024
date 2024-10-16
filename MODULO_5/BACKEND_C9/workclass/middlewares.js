import express from "express";

const server = express();
const port = 8000;

server.use(express.json());

const middleware = (req, res, next) => {
  console.log("Este es un middleware");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Este es el middleware 2");
  next();
};

server.get("/middleware", middleware, (req, res) => {
  res.send("hola mundo");
});

server.get("/middleware2", middleware2, (req, res) => {
  res.send("hola mundo 2");
});

const validateBodyMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    next();
  } else {
    res.status(401).send("username and password are required");
  }
};

server.post("/login", [validateBodyMiddleware, middleware], (req, res) => {
  const { username, password } = req.body;

  if (username === "daniel@lala.com" && password === "12345678") {
    res.status(200).send("logged");
  } else {
    res.status(401).send("username or password is wrong");
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//readable.pipe(transform).pipe(transform).pipe(writable)

//request -> middlewares -> middlewares -> response
