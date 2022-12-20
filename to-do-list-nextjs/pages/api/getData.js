const url = process.env.DATABASE_URL

import {MongoClient} from "mongodb"

export default async function handler(req, res)
{
	const client = new MongoClient(url,{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	await client.connect()

	const db = client.db("to-do")
	const collection = db.collection("users")
	
	const user = {
		username: "JoaoPedro",
		password:"senhafodapracaralho",
	}
	const response = await collection.findOne(user)
	res.status(200).json(response)
}
