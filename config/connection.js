const mysql = require('mysql')

const dbCon = mysql.createPool({
	connectionLimit: 10,
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
})

module.exports = dbCon