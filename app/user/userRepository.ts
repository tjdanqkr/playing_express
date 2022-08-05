import { Users } from "./userEntity";
import { insertUserType, LoginType } from "./userType";

export const findUser = async () => {
  const users = await Users.find();

  return users;
};

export const findUserById = async (id: number) => {
  const users = await Users.findOneBy({ id });

  return users;
};

export const insertUser = async (user: insertUserType) => {
  const { name, img, userId, password } = user;
  const isSave = await Users.save({ name, img, userId, password });

  return isSave;
};
export const loginUser = async (user: LoginType) => {
  const isLogin = await Users.findOneBy(user);

  return isLogin;
};
