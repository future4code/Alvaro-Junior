import { UserDataBase } from "../data/userData";
import { signupInputDTO, user } from "./entities/user";
import { CustomError } from "./errors/CustomError";
import { generateToken } from "./services/authenticator";
import { HashManager } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

const userDataBase: UserDataBase = new UserDataBase()
const hashManager: HashManager = new HashManager()

export class UserBusines {

  signup = async (
    input: signupInputDTO
  ) => { 
    const id: string = generateId()
 
    const cypherPassword = await hashManager.hash(input.password);
 
    const user = {
      id,
      name: input.name,
      email: input.email,
      password: cypherPassword
    }
 
    await userDataBase.insertUser(user);
 
    const token: string = generateToken({
      id
    })
 
    return token
  }

  login = async (
    email: string,
    password: string
  ) => {
    
    const user: user = await userDataBase.selectUserByEmail(email)
 
    if (!user) {
      throw new CustomError(404, "Usuário não encontrado");
    }
 
    const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)
 
    if (!passwordIsCorrect) {
      throw new CustomError(401, "Incorrect password!")
    }
 
    const token: string = generateToken({
      id: user.id
    })
 
    return token
 }
}