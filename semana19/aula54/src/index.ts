import express from 'express'
import cors from 'cors'
import { ControlerAllUsers, ControlerDelUser, ControllerLogin, ControllerSignup } from './controller/userController'



const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', ControllerSignup)
app.post('/login', ControllerLogin)

app.get('/all', ControlerAllUsers)
app.delete('/:id', ControlerDelUser)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})