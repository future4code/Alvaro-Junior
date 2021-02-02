import { recipe } from "./recipe"

export type authenticationData = {
   id: string
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   recipes?: recipe[]
}

export type signupInputDTO = {
   name: string,
   email: string,
   password: string
}

