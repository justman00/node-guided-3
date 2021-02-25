exports.seed = async (knex) => {
	await knex("posts").insert([
		{
			text: "Go back Sam, I am goin gto Mordor alone",
			user_id: 1,
		},
		{
			text: "Of course you are, and I am coming with you",
			user_id: 1,
		},
		{
			text: "One does nto simply walk into Mordor",
			user_id: 1,
		},
		{
			text: "Deeds will not be less valiant because they are unpraised",
			user_id: 2,
		},
		{
			text: "Even the smallest person can change the course of  history",
			user_id: 2,
		},
		{
			text: "There is some good in this world, Mr. Frodo... and it's worth figting for",
			user_id: 2,
		},
		{
			text: "A hunted man sometimes wearies of distrust and longs for friendship",
			user_id: 2,
		},
		{
			text: "Yet such is oft the course of deeds that move the wheels of the world: small hands do them because the must, while the eyes of the great are elsewhere",
			user_id: 2,
		},
		{
			text: "It is a strange fate that we should suffer so much fear and doubt over so small a thing... such a little thing",
			user_id: 2,
		},
		{
			text: "He that breaks a thing to find out what it is, has left the path of wisdom",
			user_id: 2,
		},
		{
			text: "All we have to decide is what to do with the time that is given us",
			user_id: 2,
		},
		{
			text: "The burned hand teaches best. After that advice about fire goes to the heart",
			user_id: 2,
		},
		{
			text: "Never toss a dwarf!",
			user_id: 2
		},
		{
			text: "Faithless is he that says farewell when the road darkens",
			user_id: 2,
		},
	])
}
