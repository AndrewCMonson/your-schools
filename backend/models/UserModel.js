import mongoose from "mongoose";
// import School from "./SchoolsModel.js";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "school",
        },
    ],
    });

const User = mongoose.model('user', userSchema);

export default User;