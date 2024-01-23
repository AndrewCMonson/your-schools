import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import schools from './data/schools.js';
import schoolRoutes from './routes/schoolRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 3005;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/schools', schoolRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
