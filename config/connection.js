const mysql = require('mysql')

const pool = mysql.createPool({
	connectionLimit: 10,
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
})
pool.on('acquire', connection => {
	console.log(`Connection ${connection.threadId} acquired.`)
})

pool.on('enqueue', () => console.log(`Waiting for available connection slot`))

pool.on('release', connection => console.log(`Connection ${connection.threadId} released`))

module.exports = pool
