import axios from "axios"

const URL = "https://viacep.com.br/ws/"

export const getAdressByCep = async(cep: string) => {
  try {
    const result = await axios.get(`${URL}${cep}/json`)
    const myAdress = {
      street: result.data.logradouro,
      neighbourhood: result.data.bairro,
      city: result.data.localidade,
      state: result.data.uf
    }

    return myAdress
  } catch (error) {
    throw new Error(error.message)
  }
}