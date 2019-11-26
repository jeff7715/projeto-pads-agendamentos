const express = require('express'),
    bodyparse = require('body-parser'),
    routes = require('./routes')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);

var port = 3000;
app.listen(port, function(req, res){
    console.log('Server is running at port: ',port);
});