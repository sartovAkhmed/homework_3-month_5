import axios from "axios";

export const QueryData = axios.create({
    baseURL: 'https://dummyjson.com'
})