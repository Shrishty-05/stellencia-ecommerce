import axios from "axios";
// Axios is a promise-based HTTP client for making 
// requests to a server, like GET, POST, PUT, DELETE.

const api = axios.create({
    // base url for all api req
    baseURL: 'http://localhost:8000/api/',
});

// axios.create() => creates axios instance 
/*  Why instance ? => allows you to set default configurations 
(like base URL, headers, timeouts) so you don’t have to repeat them in every request

*/

export default api;

// API = the source of data or service (backend server).

// Axios instance = the tool your frontend uses to make requests to that API.

// Without the API, the car (Axios) has nowhere to go. Without the car (Axios),
// you can’t easily reach the API. They work together.