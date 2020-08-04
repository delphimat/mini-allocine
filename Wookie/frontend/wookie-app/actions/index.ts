import axios from 'axios'

const BASE_URL = "http://localhost:3001"

export const  getMovies = () => {
    return axios.get(`${BASE_URL}/v1/movies`).then(res => res.data)
}

export const getCategories = () => {
    return axios.get(`${BASE_URL}/v1/movies/categories`).then(res => res.data)
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/v1/movies/view/id/${id}`).then(res => res.data)
}

export const getMovieBySlug = (slug) => {
    return axios.get(`${BASE_URL}/v1/movies/view/slug/${slug}`).then(res => res.data)
}