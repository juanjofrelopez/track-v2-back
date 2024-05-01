import { Request, Response } from "express";
import authService from "../services/auth";

export default {
  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.singIn(email, password);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },

  async signUp(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const result = await authService.signUp(username, email, password);
      return res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error : ", e.message, e.stack);
        return res.status(500).json({ message: e.message, stack: e.stack });
      }
    }
  },
};
