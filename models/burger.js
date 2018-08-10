let orm = require('../config/orm')

const burger = {
	table: 'burgers',
	insertOne(name, cb) {
		if (!name) return console.log('Please enter a correct name.')
		const vals = { burger_name: name }
		orm.insertOne(this.table, vals, data => {
			console.log(data)
			cb()
		})
	},
	updateOne(id, cb) {
		orm.updateOne(this.table, id, { devoured: true }, data => {
			console.log(data)
			cb()
		})
	},
	selectAll(cb) {
		orm.selectAll(this.table, cb)
	}
}

module.exports = burger
