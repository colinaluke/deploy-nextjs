import users from './users.json'
import fs from 'fs'
import path from 'path'

const saveUser = (body, res) => {
	const dir = path.join(process.cwd(), 'pages/api/users');
	const user_id = users.length + 1;
	users.push({ user_id, ...body });
	
	try {
		fs.writeFileSync(`./users.json`, JSON.stringify(users, null, 2))
		res.status(200).json({ message: "Success", data: users })
	} catch(err) {
		res.status(401).json({ message: "Error saving data", data: err })
    }
}

const handler = (req, res) => {
	const { method, body } = req;
	console.log(method)

	if (method.toUpperCase() === 'POST') {
		saveUser(body, res);
	} else {
		res.status(405).json({ message: "Method not allowed" });
    }
}

export default handler;