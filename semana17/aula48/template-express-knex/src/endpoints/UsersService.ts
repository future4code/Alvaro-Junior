import { Request, Response } from "express";
import { selectAllUsers, selectUsersByName, selectUsersByType, selectOrderedUsers, selectPaginatedUsers, selectUsers } from "../data/UsersDao"
import { search } from "../types/search";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    const users = await selectAllUsers()

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
  try {
    const name:string = req.query.name as string
    const users = await selectUsersByName(name)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
  try {
    const type: string = req.params.type as string
    const users = await selectUsersByType(type)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getOrderedUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    const orderBy: string = req.query.orderBy as string

    if (orderBy !== "name" && orderBy !== "type") {
      res.statusCode = 422
      throw new Error("Valores possíveis para ordenação são name ou type!")
    }

    const users = await selectOrderedUsers(orderBy)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getPaginatedUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    const page: number = Number(req.query.page)
    const users = await selectPaginatedUsers(page)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    if (!req.query.type) {
      res.statusCode = 422
      throw new Error("Type is undefined!")
    }

    const {
      name = "",
      type,
      orderBy = "name",
      page = "1"
    } = req.query as search
    const searchInput = {
      name,
      type,
      orderBy,
      page
    }
    const users = await selectUsers(searchInput)

    if(!users.length){
      res.statusCode = 404
      throw new Error("No user found")
    }

    res.status(200).send(users)
     
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}