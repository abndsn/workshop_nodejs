var fs = require("fs");

var content = fs.readFileSync("products.json");

var prodt = JSON.parse(content);

console.log(prodt);
console.log(prodt.description);
//console.log("Products : \n"+ content);
