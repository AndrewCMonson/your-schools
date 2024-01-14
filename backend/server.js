import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import schools from './data/schools.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send(schools);
    });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    });