import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import schools from './data/schools.js';
import schoolRoutes from './routes/schoolRoutes.js';

const PORT = process.env.PORT || 3005;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/schools', schoolRoutes);

// app.get('/api/schools', (req, res) => {
// 	const { city, zipcode, asc } = req.query;

// 	if (city && zipcode) {
// 		const filteredSchools = schools.filter(
// 			school => school.city === city && school.zipcode === zipcode
// 		);
// 		if (!filteredSchools.length) {
// 			res.status(404).send('No schools found');
// 		}
// 		res.send(filteredSchools);
// 	}

// 	if (city) {
// 		const filteredSchools = schools.filter(school => school.city === city);

// 		if (!filteredSchools.length) {
// 			res.status(404).send({message: 'No schools found'});
// 		}
// 		res.send(filteredSchools);
// 	}

// 	if (zipcode) {
// 		const filteredSchools = schools.filter(
// 			school => school.zipcode === zipcode
// 		);
// 		res.send(filteredSchools);
// 	}

// 	res.send(schools);
// });

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
