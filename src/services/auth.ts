import config from "../config";
import { TUser } from "../types/TUser";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import userService from "./user";

export default {
  generateSession(user: TUser) {
    return jwt.sign(
      {
        ...user,
      },
      config.jwtSecret,
      { expiresIn: "1d" }
    );
  },

  async signUp(username: string, email: string, password: string) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const newUser = await userService.createUser({
      username,
      email,
      password: passwordHash,
    });
    return { user: newUser };
  },

  async singIn(email: string, password: string) {
    const foundUser = await userService.getUserByEmail(email);
    if (!foundUser) throw new Error("Incorrect email");
    const dbHash = foundUser.password;
    const hashResult = bcrypt.compareSync(password, dbHash);
    if (!hashResult) throw new Error("Password incorrect");
    const token = this.generateSession(foundUser);
    return { user: foundUser.toJSON(), token };
  },
};
