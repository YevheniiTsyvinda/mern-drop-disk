import axios from "axios";

const ax = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default ax;