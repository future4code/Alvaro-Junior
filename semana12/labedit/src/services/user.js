import axios from "axios"
import {base_url} from '../constants/apiConstants'
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, history) => {
  axios.post(`${base_url}/login`, body).then(res => {
    localStorage.setItem("token", res.data.token)
    goToFeedPage(history)
  }).catch(err => {
    console.log(err)
  })
}

export const signin = (body, history) => {
  axios.post(`${base_url}/signup`,body).then(res => {
    localStorage.setItem("token", res.data.token)
    goToFeedPage(history)
  }).catch(err => {
    console.log(err)
  })
}