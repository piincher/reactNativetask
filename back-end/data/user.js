import bcrypt from 'bcryptjs';
const users = [
	{
		name: 'admin',
		email: 'admin@example.com',
		password: bcrypt.hashSync('12345678', 10),
		isAdmin: true
	},
	{
		name: 'papi',
		email: 'papi@example.com',
		password: bcrypt.hashSync('12345678', 10)
	},

	{
		name: 'badra',
		email: 'badra@example.com',
		password: bcrypt.hashSync('12345678', 10)
	}
];

export default users;
