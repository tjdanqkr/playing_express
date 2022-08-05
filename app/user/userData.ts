import { Request, Response } from "express";
import { Users } from "./userEntity";

export const findUser = async () => {
  const users = await Users.find();
  console.log(users);
  return users;
};
