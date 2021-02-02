import express from 'express'
import cors from 'cors'
import { userRouter } from './controller/routes/userRouter'
import { recipeRouter } from './controller/routes/recipeRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter);
app.use("/recipe", recipeRouter);

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
