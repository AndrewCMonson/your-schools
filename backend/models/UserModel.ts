import { Schema, Types, model } from "mongoose";
import bcrypt from "bcrypt";

interface UserAttributes {
  username: string;
  email: string;
  password: string;
  favorites: Array<Types.ObjectId>;
  isCorrectPassword: (password: string) => Promise<boolean>;
}

export const userSchema = new Schema<UserAttributes>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
  },
  // favoriteIds
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "School",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export const User = model("user", userSchema);
