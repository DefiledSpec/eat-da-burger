const mysql = require('mysql')

const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'krirhuagl0bj18ab',
	password: 'anaijoe8m200vwaq',
	database: 'iw0i1q3s5b92okqp'
})
pool.on('acquire', connection => {
	console.log(`Connection ${connection.threadId} acquired.`)
})

pool.on('enqueue', () => console.log(`Waiting for available connection slot`))

pool.on('release', connection => console.log(`Connection ${connection.threadId} released`))

module.exports = pool
