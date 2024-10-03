import fs from "fs";
import http from "http";

// without streams

// const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("./bigFile.txt", (err, data) => {
//     res.end(data);
//   });
// });

// server.listen(3002);

// using streams

const server2 = http.createServer();

server2.on("request", (req, res) => {
  const data = fs.createReadStream("./bigFile.txt", { highWaterMark: 1024 });

  data.pipe(res);
});

server2.listen(3002);
