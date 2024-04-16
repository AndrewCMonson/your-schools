import { Schema, Types, model } from "mongoose";

interface SessionAttributes {
  user: Types.ObjectId;
  expires: Date;
  token: string;
}

export const sessionSchema = new Schema<SessionAttributes>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export const Session = model("Session", sessionSchema);
