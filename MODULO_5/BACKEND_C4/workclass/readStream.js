import { createReadStream } from "fs";

//Abrimos el Stream
var readStream = createReadStream("./data.txt");

//Cada Buffer lo imprimimos
readStream.on("data", (chunk) => {
    console.log("---------------------------------");
    console.log(chunk);
    console.log("---------------------------------");
});

//Cuando recién se abre el Stream que se emite el evento `open`
readStream.on("open", () => {
    console.log("Stream opened...");
});

//Cuando se cierra el Stream se emite el evento `end`
readStream.on("end", () => {
    console.log("Stream Closed...");
});
