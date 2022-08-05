import { Users } from "./userEntity";

export type user = {
  id?: number;
  name: string;
  img: string;
};

export const parseUserEntityToUserDto = (userEntity: Users) => {
  const { id, img, name } = userEntity;
  const dto: user = { id, img, name };
  return dto;
};
