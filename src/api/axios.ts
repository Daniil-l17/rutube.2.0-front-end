import axios from 'axios'
import { getContentType } from '../utils/apiInfoJson'

export const axiosClassic = axios.create({
  baseURL: 'http://localhost:4200/api',
  headers: getContentType()
})