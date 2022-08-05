import { parseUserEntityToUserDto, user } from "./userDto";
import { Users } from "./userEntity";

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
  const users = await Users.save({ name, img });

  return users;
};
