import express, { Request, Response } from "express";
import { isPositiveInteger } from "../config/isPositiveInteger";
import { findUser, findUserById, insertUser } from "./userRepository";

import { insertUserType } from "./userType";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
  const user = await findUser();
  return res.status(200).send({ user });
});
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id || !isPositiveInteger(id)) return res.status(400).send({ status: "error", error: "Bad Request / Parameter!!" });
  const user = await findUserById(Number(id));
  const status = user ? 200 : 204;
  return res.status(status).send({ user });
});

router.post("/", async (req: Request, res: Response) => {
  const { name, img } = req.body;
  const userDto: insertUserType = { name, img };

  const user = await insertUser(userDto);
  const status = user ? 200 : 204;
  return res.status(status).send({ user });
});

export default router;
