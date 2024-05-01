import mongoose from "mongoose";
import User from "../models/User";
import { NextFunction, Request, Response } from "express";

const attachCurrentUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRecord = await User.findById(req.token._id);
    if (!userRecord) {
      return res.sendStatus(401);
    }
    const user = userRecord.toObject();
    Reflect.deleteProperty(user, "password");
    req.user = user;
    return next();
  } catch (e) {
    console.log("🔥 Error attaching user to req: %o", e);
    return next(e);
  }
};

export default attachCurrentUser;
