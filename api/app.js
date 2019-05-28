var redis = require('redis');
var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');


module.exports = redisClient;
app.listen(3000);
app.use(bodyParser.json());
console.log('Corriendo server');

app.use(cors({origin: 'http://localhost:4200'}));


var redisClient = redis.createClient(6379, 'redis');

//Router

app.use('/episodio', require('./routes/episodio.routes'));

redisClient.on('connect', function() {
    console.log('Conectado a Redis Server');

});

redisClient.on('error', function(err){
    console.log('Error: '+ err);
});

app.get('/', (req, res)=> {
    res.send('HOLA');
    
});
