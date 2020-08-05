const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
const { Console } = require("console");

const htmlne = fs.readFileSync("./tkb.html");
const base64Image = new Buffer.from(htmlne).toString("base64");
//console.log(base64Image);
nodeHtmlToImage({
  output: "./image.png",
  html: "{{htmltkb}}",
  encoding: { htmltkb: htmlne },
}).then(() => console.log("The image was created successfully!"));
