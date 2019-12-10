const mysql = require('mysql');
const { promisify }  = require('util');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'agendaConsulta'
});

module.exports = promisify(connection.query).bind(connection);