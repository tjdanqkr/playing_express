import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Users } from "../user/userEntity";
import { returnLoginType, selectUserType } from "../user/userType";
const SECRET_KEY = "SECRET_KEY";

export const successLoginReturnToken = (user: Users) => {
  const token = jwt.sign({ type: "JWT", name: user.name, id: user.id }, SECRET_KEY, { expiresIn: "7 days" });
  const responseData: returnLoginType = { img: user.img, name: user.name, token };
  return responseData;
};
export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization || !(authorization.indexOf("Bearer ") === 0)) return res.status(401).send();
  try {
    const token = authorization?.replace("Bearer ", "");
    const verifyToken = jwt.verify(token, SECRET_KEY);

    req.body.token = verifyToken;
    return next();
  } catch (error: any) {
    // 인증 실패
    // 유효시간이 초과된 경우
    if (error.name === "TokenExpiredError") {
      return res.status(419).send("토큰이 만료되었습니다.");
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send("유효하지 않은 토큰입니다.");
    }
  }
};
