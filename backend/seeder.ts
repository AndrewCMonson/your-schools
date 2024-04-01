import dotenv from "dotenv";
import process from "process";
import connectDB from "./config/db.ts";
import { User, School } from "./models/index.ts";
import { users, schools } from "./data/index.ts";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await School.deleteMany();
    await User.deleteMany();

    await School.insertMany(schools);

    await User.insertMany(users);

    console.log("Data imported");
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

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
