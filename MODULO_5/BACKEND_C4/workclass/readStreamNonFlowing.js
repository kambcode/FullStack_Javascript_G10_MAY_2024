import { createReadStream } from "fs";

var readStream = createReadStream("./data.txt");

setTimeout(() => {
    const data = readStream.read(10);
    console.log(data);
}, 10);
