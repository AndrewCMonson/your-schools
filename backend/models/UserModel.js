import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 12;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('user', userSchema);

export default User;