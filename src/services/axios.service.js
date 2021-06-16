import axios from "axios"

const apiUrl = process.env.GATSBY_API_URL

export const publicAxios = axios.create({
  baseURL: apiUrl,
})
