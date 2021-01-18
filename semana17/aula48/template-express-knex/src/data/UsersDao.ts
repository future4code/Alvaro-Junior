import {connection} from '../index'
import { search } from '../types/search'

export async function selectAllUsers():Promise<any> {
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')

  return result
}

export async function selectUsersByName(name: string):Promise<any> {
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')
    .where('name', 'like', `%${name}%`)

  return result
}

export async function selectUsersByType(type: string):Promise<any> {
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')
    .where('type', type)

  return result
}

export async function selectOrderedUsers(orderBy: string):Promise<any> {
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')
    .orderBy(`${orderBy}`)

  return result
}

export async function selectPaginatedUsers(page: number):Promise<any> {
  const offset: number = 5 * (page - 1)
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')
    .limit(5)
    .offset(offset)

  return result
}

export async function selectUsers(search: search):Promise<any> {
  const pageNumber = Number(search.page)
  const offset: number = 5 * (pageNumber - 1)
  const result = await connection('aula48_exercicio')
    .select('id', 'name', 'email', 'type')
    .where('name', 'like', `%${search.name}%`)
    .andWhere('type', search.type)
    .orderBy(`${search.orderBy}`)
    .limit(5)
    .offset(offset)

  return result
}