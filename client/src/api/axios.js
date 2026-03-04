import axios from "axios";

const api = axios.create({
    baseURL: 'https://stellencia-ecommerce.onrender.com/api/',
});

export default api;

