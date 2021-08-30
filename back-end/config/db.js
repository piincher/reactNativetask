import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
	try {
		const connec = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		console.log(`mongo connected : ${connec.connection.host}`.cyan);
	} catch (error) {
		console.log(`error : ${error.message}`.red.bold);
		process.exit(1);
	}
};

export default connectDB;
