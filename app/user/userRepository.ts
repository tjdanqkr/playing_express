import { user, Users } from "./userEntity";

export const findUser = async () => {
  const users = await Users.find();

  return users;
};

export const findUserById = async (id: number) => {
  const users = await Users.findOneBy({ id });

  return users;
};

export const insertUser = async (user: user) => {
  const { name, img } = user;
  const isSave = await Users.save({ name, img });

  return isSave;
};
