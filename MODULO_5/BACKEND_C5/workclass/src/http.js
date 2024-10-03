import http from "http";
import fs from "fs";

const readFile = fs.createReadStream("./streamFile.txt", { encoding: "utf-8" });

http //req ,   res(Write stream)
  .createServer((request, response) => {
    const header = { "Content-Type": "text/html" };

    response.writeHead(200, header);

    readFile.pipe(response);
    // response.write("hello world");
    // response.end();
  })
  .listen(3000)
  .on("listening", () => {
    console.log("Server is started in port 3000");
  });
