import express, { Request, Response } from "express";
import { findUser, findUserById, insertUser, loginUser } from "./userRepository";
import { insertUserType, LoginType, returnLoginType } from "./userType";
import { checkToken, successLoginReturnToken } from "../config/tokenConfig";

const router = express.Router();

router.get("", async (req: Request, res: Response) => {
  const user = await findUser();
  return res.status(200).send({ user });
});
// router.get("/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   if (!id || !isPositiveInteger(id)) return res.status(400).send({ status: "error", error: "Bad Request / Parameter!!" });
//   const user = await findUserById(Number(id));
//   const status = user ? 200 : 204;
//   return res.status(status).send({ user });
// });

router.post("/", async (req: Request, res: Response) => {
  const { name, img, userId, password } = req.body;
  const userDto: insertUserType = { name, img, userId, password };

  const user = await insertUser(userDto);
  const status = user ? 201 : 204;
  return res.status(status).send({ user });
});
router.post("/login", async (req: Request, res: Response) => {
  const { password, userId }: LoginType = req.body;
  const userDto: LoginType = { password, userId };

  const user = await loginUser(userDto);
  const status = user ? 200 : 401;
  if (!user) return res.status(status).send("not user");
  const tokenDto = successLoginReturnToken(user);
  return res.status(status).send({ user: tokenDto });
});

router.get("/check", checkToken, async (req: Request, res: Response) => {
  //   console.log(req?.decodedUser);
  const { token } = req.body;
  return res.status(200).send({ user: token });
});

export default router;
