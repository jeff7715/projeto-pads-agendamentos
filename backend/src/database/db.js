const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'pads',
	password: 'password',
	database: 'agendaConsulta'
});

module.exports = connection;