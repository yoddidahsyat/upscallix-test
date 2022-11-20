const axios = require('axios')

const baseURL = "https://email-service.digitalenvision.com.au/";

const API = axios.create({
    baseURL
});

module.exports = { baseURL, API }