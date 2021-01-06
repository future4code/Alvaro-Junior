import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app = express()

app.use(express.json())
app.use(cors())

//------------------------------------------------------------//
// Endpoint 1 - endpoint para pegar todos os países

app.get('/countries/all', (req: Request, res: Response) => {
  const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  res.status(200).send(result)
})

//------------------------------------------------------------//


//------------------------------------------------------------//
// Endpoint 3 - endpoint para pesquisar países a partir do nome, capital ou continente

app.get('/countries/search', (req: Request, res: Response) => {
  let result: country[] = countries
  
  if (req.query.name) {
    result = result.filter(
      country => country.name.includes(req.query.name as string)
    )
  }
  
  if (req.query.capital) {
    result = result.filter(
      country => country.capital.includes(req.query.capital as string)
    )
  }
  
  if (req.query.continent) {
    result = result.filter(
      country => country.continent.includes(req.query.continent as string)
    )
  }
  
  if (result.length !== countries.length && result.length > 0) {
    res.status(200).send(result)
  } else if(result.length > 0) {
    res.status(400).send("Nenhum parâmetro válido foi passado")
  } else {
    res.status(404).send("País não encontrado!")
  }
})

//------------------------------------------------------------//


//------------------------------------------------------------//
// Endpoint 2 - endpoint para pegar apenas um país de acordo com o seu id

app.get('/countries/:id', (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id)
    )
    
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(404).send("País não encontrado!")
    }
  })
  
  //------------------------------------------------------------//
  

  
  app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});