import axios from "axios"
import apiHelpers from "./apiHelpers"

const myExports = {}

//const BASE_URL = "http://localhost:8000/api"
const BASE_URL = "https://blah-backend.herokuapp.com"

myExports.login = async (loginData) => {
  loginData = {
    username: "admin",
    password: "admin"
  }
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig()))
}

myExports.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig()))
}


myExports.sendMessage = async (postData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/donuts/`, postData, apiHelpers.getCsrfConfig()))
}


export default myExports