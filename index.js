var express = require('express'); 
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const saltRounds = 10;

var app = express(); 


    app.use(express.static('public'));
    //app.use(bodyParser.urlencoded({ extended: true }));
    app.use(passport.initialize());
    app.use(passport.session({ secret: "workshop_abnd" }));

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });
 // support json encoded bodies
 // support encoded bodies



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
var schema_user = new mongoose.Schema( {
                                            user : 'string',
                                            passe: 'string',
                                            profil: 'string'
                                        });

var Tank = mongoose.model('products', schema);

var userTank = mongoose.model('users', schema_user);
//console.log(Tank);

// Set EJS as templating engine 
app.use('/public', express.static('public'));
app.set('view engine', 'ejs'); 


const port = 3000;

passport.use(new LocalStrategy( 
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done) {
        userTank.findOne({ user: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.passe != password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));


var data = [];
var onedata = [];

app.get('/',(req, res)=>{ 

    const url = req.url;
    var params = url.substr(5);
    if( req.method === 'GET') {

      Tank.find({}, function(err, result) {
        if (err) throw err;
       // console.log(result);
       data = result

       if(params) {
           Tank.find({id: `${params}`}, function(erro, oned) {
               console.log(oned)
               res.render('index', {data:data, onedata:oned}); 
           })
        
        } else {
            res.render('index', {data:data}); 
        }
      })
        console.log(params);
    } else {
       /* Tank.find({id: `${params}`}, function(err, result) {
            if (err) throw err;
            console.log(result);
            
          })*/
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash("ndiaye", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
      
    }); 

    app.get('/users', (req, res) => {
        console.log(req.params)
    })

    app.get('/login',(req, res)=>{ 
        console.log('login')
        res.render('login');
        
    });
    app.post('/login', 
            passport.authenticate('local', { successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false })
        );
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            //res.redirect('/users/' + req.user.username);
            //console.log( req.user);
           // });
    
    /*(req, res) => {
        var user_id = req.body.username;
       // var token = req.body.token;
        var passe = req.body.passuser;
    
        console.log(user_id + ' ' + passe  );*/
       


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

// orders : produit_id , user_id, date_commande, prix

