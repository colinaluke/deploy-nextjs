import users from './users'

const handler = (req, res) => {
    return res.status(200).json(users);
}

export default handler