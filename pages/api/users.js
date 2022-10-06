import users from './users/users.json'

const handler = (req, res) => {
	return res.status(200).json(users);
}

export default handler;