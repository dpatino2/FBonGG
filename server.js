var express = require('express');
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV | 'development';

app.use(express.static(__dirname + '/public'));

app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
})

app.listen('8080',()=> {
    console.log('Listening on port 8080');
});