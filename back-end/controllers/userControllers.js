import asycHandler from 'express-async-handler';
import User from '../models/userModels.js';
import { generateToken } from '../utils/generateToken.js';
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
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error('invalid email and password ');
	}
});

//@desc Auth User
//@route Get /api/users/profile
//@access private

const getUserProfile = asycHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		});
	} else {
		res.status(404);
		throw new Error('user not found ');
	}
});

export { authUser, getUserProfile };
