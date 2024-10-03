import http from "http";

const port = 3000;

const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
]);

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/html" });

  const headers = { "content-type": "text/html" };

  switch (req.url) {
    case "/books/:title":
      res.writeHead(200, headers);
      res.write(books);
      break;
    case "/authors/:name":
      res.writeHead(200, headers);
      res.write(authors);
      break;

    default:
      res.writeHead(404, headers);
      res.write(JSON.stringify({ error: "Route not found" }));
      break;
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server is Listening at port ${port}`);
});
