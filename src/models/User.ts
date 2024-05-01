import mongoose from "mongoose";
import { TUser } from "../types/TUser";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, trim: true, require: true },
    email: { type: String, trim: true, require: true },
  },
  { timestamps: true }
);

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

export default mongoose.model<TUser & mongoose.Document>(
  "User",
  UserSchema,
  "users"
);
