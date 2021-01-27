import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getUserProfile, userLogin, userSignUp } from "./endpoints/UserServices";


dotenv.config();

const app = express();
app.use(express.json());

app.get('/user/profile', getUserProfile)
app.post('/signup', userSignUp)
app.post('/login', userLogin)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});