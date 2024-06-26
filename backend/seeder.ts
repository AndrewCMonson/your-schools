import dotenv from "dotenv";
import process from "process";
import connectDB from "./config/db.ts";
import { UserModel, SchoolModel } from "./models/index.ts";
import { users, schools } from "./data/index.ts";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await SchoolModel.deleteMany();
    await UserModel.deleteMany();

    await SchoolModel.insertMany(schools);

    await UserModel.insertMany(users);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await SchoolModel.deleteMany();
    await UserModel.deleteMany();

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
