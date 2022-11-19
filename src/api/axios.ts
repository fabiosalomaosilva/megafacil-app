import axios from "axios";

const local = JSON.parse(localStorage.getItem('megafacil') as string) ?? '';
export const api = axios.create({
  baseURL: 'http://localhost:3300/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${local.access_data}`,
  }
})
