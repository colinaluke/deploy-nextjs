import users from './users.json'

const getUser = (query, res) => {
	const { user_id } = query
	const user = users.filter((user) => user.user_id === parseInt(user_id));
	return user.length > 0 ?
		res.status(200).json(user[0]) :
		res.status(400).json({ message: 'User not found!' });
}

const handler = (req, res) => {
	const { query, body, method } = req;

	switch (method) {
		case 'GET':
			return getUser(query, res)
			break;
		default:
			res.status(405).end(`Method ${method} not allowed`)
	}
}

export default handler;