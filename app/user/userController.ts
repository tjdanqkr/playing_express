import express, { Request, Response } from "express";
import { isPositiveInteger } from "../config/isPositiveInteger";
import { user } from "./userDto";
import { findUserByIdService, findUserService, insertUserService } from "./userService";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
  const user = await findUserService();
  return res.status(200).send({ user });
});
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id || !isPositiveInteger(id)) return res.status(400).send({ status: "error", error: "Bad Request / Parameter!!" });
  const user = await findUserByIdService(Number(id));
  const status = user ? 200 : 204;
  return res.status(status).send({ user });
});

router.post("/", async (req: Request, res: Response) => {
  const { name, img } = req.body;
  const userDto: user = { name, img };

  const user = await insertUserService(userDto);
  const status = user ? 200 : 204;
  return res.status(status).send({ user });
});

export default router;
