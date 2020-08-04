import axios from 'axios'

const BASE_URL = "http://localhost:3001"
const API_MESSAGE = "No data fetched from the API.<br/>Please Check if the Nest.js project is online and on port 3001"

export const  getMovies = () => {
    return axios.get(`${BASE_URL}/v1/movies`).
    then(res => res.data)
        .catch(function (error) {
            // handle error
            console.log(API_MESSAGE)
            return []
        })
}

export const getCategories = () => {
    return axios.get(`${BASE_URL}/v1/movies/categories`)
        .then(res => res.data)
        .catch(function (error) {
            // handle error
            console.log(API_MESSAGE)
            return []
        })
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/v1/movies/view/id/${id}`)
        .then(res => res.data)
        .catch(function (error) {
            // handle error
            console.log(API_MESSAGE)
            return []
        })
}

export const getMovieBySlug = (slug) => {
    return axios.get(`${BASE_URL}/v1/movies/view/slug/${slug}`)
        .then(res => res.data)
        .catch(function (error) {
            // handle error
            console.log(API_MESSAGE)
            return []
        })
}