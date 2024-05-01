import User from "../models/User";
import { TUser } from "../types/TUser";

export default {
  createUser(user: Omit<TUser, "_id">) {
    const newUser = new User(user);
    return newUser.save();
  },

  getUserByEmail(email: string) {
    return User.findOne({ email: email });
  },
};
