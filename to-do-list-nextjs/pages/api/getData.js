import connect from "../../utils/database"

export default async function handler(req, res)
{

	const {db} = await connect()
	
	const user = {
		username: req.body.username,
		password: req.body.password,
	}

	const response = await db.collection("users").findOne(user)

	res.status(200).json(response)
}
