exports.up = async (knex) => {
	await knex.schema.createTable("users", table => {
		table.increments()
		table.string("name").notNull()
		table.string("email").notNull()
		table.timestamps(true, true)
	})
	
	await knex.schema.createTable("posts", table => {
		table.increments()
		table.text("text").notNull()
		table.timestamps(true, true)
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("users")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
	})
}

exports.down = async (knex) => {
	await knex.schema.dropTableIfExists("posts")
	await knex.schema.dropTableIfExists("users")
}
