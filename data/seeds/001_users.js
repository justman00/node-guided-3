exports.seed = async (knex) => {
	await knex("users").insert([
		{ name: "Jane Doe", email: "jane@doe.com" }, // 1
		{ name: "John Doe", email: "john@doe.com" }, // 2
		{ name: "Jack Doe", email: "jack@doe.com" }, // 3
	])
}
