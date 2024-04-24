import { Schema, Types, model, Document } from "mongoose";

export interface SessionAttributes extends Document {
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

export const SessionModel = model("Session", sessionSchema);
