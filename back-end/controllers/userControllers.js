import asycHandler from 'express-async-handler';
import User from '../models/userModels.js';

//@desc Auth User and Get token
//@route Post /api/users/login
//@access public

const authUser = asycHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: null
		});
	} else {
		res.status(401);
		throw new Error('invalid email and password ');
	}
});

export { authUser };
