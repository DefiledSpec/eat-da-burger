let dbCon = require('./connection')

const orm = {
	sql: '',
	selectAll(table, cb) {
		this.sql = `SELECT * FROM ${table}`
		dbCon.query(this.sql, (err, results) => {
			if (err) console.log(err)
			cb(results)
		})
	},
	insertOne(table, vals, cb) {
		this.sql = `INSERT INTO ${table} SET ?`
		dbCon.query(this.sql, [ vals ], (err, results) => {
			if (err) console.log(err)
			cb(results)
		})
	},
	updateOne(table, id, vals, cb) {
		this.sql = `UPDATE ${table} SET ? WHERE id = ?`
		dbCon.query(this.sql, [ vals, id ], (err, results) => {
			if (err) console.log(err)
			cb(results)
		})
	}
}

module.exports = orm
