import mongoose from 'mongoose';
import dotenv from 'dotenv';
import schools from './data/schools.js';
import School from './models/SchoolsModel.js';
import images from './data/images.js';
import User from './models/UserModel.js';
import users from './data/user.js';

dotenv.config();
import connectDB from './config/db.js';

connectDB();

const importData = async () => {
    try {
        await School.deleteMany();
        await User.deleteMany();

        

        const createdSchools = await School.insertMany(schools);

        const imagesWithOwner = images.map(image => {
            return { ...image, owner: createdSchools[0]._id };
        });

        const updatedSchools = await School.findByIdAndUpdate(
            createdSchools[0]._id,
            { images: imagesWithOwner },
            { new: true }
        );


        await User.insertMany(users);

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
        await User.deleteMany();

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