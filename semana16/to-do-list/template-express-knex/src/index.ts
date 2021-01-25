import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsersEndpoint, getUserByIdEndpoint, getUserByTextEndpoint, insertUserEndpoint, updateUserEndpoint } from "./endpoints/UserService";
import { getTaskByCreatorUserIdEndpoint, getTaskByIdEndpoint, insertTaskEndpoint } from "./endpoints/TaskService";
import { insertResponsibleEndpoint } from "./endpoints/ResponsibleUserService";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui

app.get('/user/all', getAllUsersEndpoint)
app.get('/user', getUserByTextEndpoint)
app.get('/user/:id', getUserByIdEndpoint)
app.post('/user', insertUserEndpoint)
app.put('/user/edit/:id', updateUserEndpoint)

app.get('/task', getTaskByCreatorUserIdEndpoint)
app.get('/task/:id', getTaskByIdEndpoint)
app.post('/task', insertTaskEndpoint)

app.post('/task/responsible', insertResponsibleEndpoint)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
