import axios from "axios"

const ApiData = axios.create({
    baseURL: "http://localhost:5000/"
})

export default ApiData;