import { connection } from "../services/connection"
import { adress } from "../types/Adress"

export const insertAdress = async (adress: adress) => {
  await connection("Adress")
    .insert(adress)
}