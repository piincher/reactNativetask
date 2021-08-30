import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/user.js';
import videos from './data/videos.js';

import Video from './models/videoModels.js';
import User from './models/userModels.js';

import connectDB from './config/db.js';
dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Video.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;
		const sampleVideo = await videos.map((video) => {
			return { ...video, user: adminUser };
		});
		await Video.insertMany(sampleVideo);
		console.log('data imported!! '.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Video.deleteMany();
		await User.deleteMany();
		console.log('Data destroyed'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
