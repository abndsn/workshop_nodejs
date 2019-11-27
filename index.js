var express = require('express'); 
var app = express(); 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ebook')

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to db');
});

mongoose.connection.on('error', function(error) {
    console.log('Mongoose default connection error: '+ error);
});

var schema = new mongoose.Schema({
                                    id: 'string', 
                                    name: 'string', 
                                    description: 'string',
                                    USD_price: 'number',
                                    EUR_price: 'number',
                                    file_link: 'string',
                                    creation_date: 'date',
                                    orders_counter: 'number'
                                });
var Tank = mongoose.model('products', schema);

console.log(Tank);

// Set EJS as templating engine 
app.use('/public', express.static('public'));
app.set('view engine', 'ejs'); 


const port = 3000;

var data = [
                {
                    "id":               "echo",
                    "name":             "Echo Dot",
                    "description":      "Notre enceinte connectée la plus populaire : désormais avec un design en tissu et dotée d'un haut-parleur amélioré pour un son plus riche et plus puissant.",
                    "USD_price":        19.96,
                    "EUR_price":        21.00,
                    "file_link":        "https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg",
                    "creation_date":    "2019-11-25",
                    "orders_counter":   5
                },
                {
                    "id":               "posture",
                    "name":             "Olymstars Correcteur de Posture",
                    "description":      "Olymstars Correcteur de Posture, Réglable et Respirant Correcteur Dos - Soulager Les Douleurs Dorsales, Colonne, Thoraciques, Cou et Epaules - Améliorer Posture avec Ceinture Lombaire Homme Femme",
                    "USD_price":        24.23,
                    "EUR_price":        22.00,
                    "file_link":        "https://images-na.ssl-images-amazon.com/images/I/61db73q4lYL._AC_SL1000_.jpg",
                    "creation_date":    "2019-11-25",
                    "orders_counter":   7
                }
            ];

app.get('/',(req, res)=>{ 

    const url = req.url;
    var params = url.substr(5);
    if( req.method === 'GET') {

      Tank.find({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        
      })
        console.log(params);
    } else {
       /* Tank.find({id: `${params}`}, function(err, result) {
            if (err) throw err;
            console.log(result);
            
          })*/
    }


    res.render('index', {data:data}); 
      
    }); 

app.listen(port, () => console.log(`>Template ejs ${port}`));

/*var http = require('http');
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello World');
    res.end('Hello la formation!\n');
});


server.listen(3000, '127.0.0.1',(port, hostname) => {
    console.log( ' port: ' );
});*/