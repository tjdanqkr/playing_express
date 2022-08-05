import { parseUserEntityToUserDto, user } from "./userDto";
import { Users } from "./userEntity";
import { findUser, findUserById, insertUser } from "./userRepository";

export const findUserService = async () => {
  const users = await findUser();

  return users.map((user) => parseUserEntityToUserDto(user));
};
export const findUserByIdService = async (id: number) => {
  const user = await findUserById(id);
  if (user) return parseUserEntityToUserDto(user);
  return null;
};
export const insertUserService = async (user: user) => {
  const isSave = await insertUser(user);
  if (isSave) return isSave;
  return null;
};
