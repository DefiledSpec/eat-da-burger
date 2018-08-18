const mysql = require('mysql')

const dbCon = mysql.createPool({
	connectionLimit: 10,
	host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'krirhuagl0bj18ab',
	password: 'anaijoe8m200vwaq',
	database: 'iw0i1q3s5b92okqp'
})

module.exports = dbCon