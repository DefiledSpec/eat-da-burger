let dbCon = require('./connection')

const orm = {
	sql: '',
	selectAll(table, cb) {
		this.sql = `SELECT * FROM ${table}`
		dbCon.query(this.sql, (err, res) => {
			if (err) throw err
			cb(res)
		})
	},
	insertOne(table, vals, cb) {
		this.sql = `INSERT INTO ${table} SET ?`
		dbCon.query(this.sql, [ vals ], (err, res) => {
			if (err) throw err
			cb(res)
		})
	},
	updateOne(table, vals, id, cb) {
		this.sql = `UPDATE ${table} SET ? WHERE id = ?`
		dbCon.query(this.sql, [ vals, id ], (err, res) => {
			if (err) throw err
			cb(res)
		})
	}
}

module.exports = orm
