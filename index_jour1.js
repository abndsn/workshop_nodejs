var fs = require("fs");
//var orderb = require('./orderby');

var content = fs.readFileSync("products.json", "utf8");

try {

    var prodt = JSON.parse(content);

}
catch(e) {
    console.log(e)
}


var i = 1;
//var orderBy = new orderb('echo', prodt);

//console.log(orderBy);

prodt.forEach(product => {
   // product.orders_counter += i; 
  
    //console.log(product.id + " / " + product.name + " / " + product.EUR_price + " / " + product.orders_counter + " # " );
});

function getAllProducts(datas) {
    //console.log(datas);
}

getAllProducts(prodt);

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on('line', (input) => {
    
   var split = input.split("I want product ")
   var searchId = split[1]
   prodt.forEach((product)=>{
       console.log(product.id, searchId)
       if(product.id == searchId){
           console.log(product)
       }
   })
   
    
  }); 