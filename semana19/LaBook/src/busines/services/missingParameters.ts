import { CustomError } from "../errors/CustomError"

export const checkMissingParameters = (input: any, params: any) => {
  for (let param of params) {
    if (!input.param) throw new CustomError(400, `Missing ${param}`)
  }
}