import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export const hash = async(plainText:string):Promise<string> => {
   const cost: number = Number(process.env.BCRYPT_COST)
   const salt: string = await bcrypt.genSalt(cost)
   const cypherText: string = await bcrypt.hash(plainText, salt)

   return cypherText
}

export const compare = async (plainText:string, cypherText:string):Promise<boolean> => {
   return await bcrypt.compare(plainText, cypherText)
}