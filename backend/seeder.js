import mongoose from 'mongoose';
import dotenv from 'dotenv';
import schools from './data/schools.js';
import School from './models/School.js';
dotenv.config();
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
    try {
        await School.deleteMany();

        await School.insertMany(schools);

        console.log('Data imported');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await School.deleteMany();

        console.log('Data destroyed');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}