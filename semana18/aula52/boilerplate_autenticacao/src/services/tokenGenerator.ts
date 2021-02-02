import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/Authentication";

export const generateToken = (input: AuthenticationData): string => {
  const expiresIn: string = process.env.JWT_EXPIRE_TIME as string || "1d"
  const token = jwt.sign({
    id: input.id
  },
    process.env.JWT_KEY as string,
  {
    expiresIn
  })

  return token
}