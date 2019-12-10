const express = require('express'),
    bodyParse = require('body-parser'),
    routes = require('./routes')

var app = express();

// app.use(bodyParse.urlencoded({extended: true}));
// app.use(bodyParse.json());
app.use(express.json());
app.use(routes);



var port = 3000;
app.listen(port, function(req, res){
    console.log('Server is running at port: ',port);
    
});


