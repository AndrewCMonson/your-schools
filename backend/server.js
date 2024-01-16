import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import schools from './data/schools.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/schools', (req, res) => {
    const { city, zipcode } = req.query;

    if (city) {
        const filteredSchools = schools.filter(school => school.city === city);
        res.send(filteredSchools);
    } else if (zipcode) {
        const filteredSchools = schools.filter(school => school.zip === zipcode);
        res.send(filteredSchools);
    } else {
        res.send(schools);
    }
});

app.get('/api/schools/:zipcode', (req, res) => {
    const { zipcode } = req.params;
    const filteredSchools = schools.filter(school => school.zip === zipcode);
    res.send(filteredSchools);

})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
