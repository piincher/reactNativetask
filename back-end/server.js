import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/v1/users', userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`server is running in ${PORT} `.bgBlue.underline);
});
