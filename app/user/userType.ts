export type insertUserType = {
  img: string;
  name: string;
  userId: string;
  password: string;
};
export type selectUserType = {
  id: number;
  img: string;
  name: string;
  userId: string;
};
export type LoginType = {
  userId: string;
  password: string;
};
export type returnLoginType = {
  name: string;
  token: string;
  img: string;
};
