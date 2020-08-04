import React from "react"

import { getMovies } from "../actions/index"
import { useEffect } from "react"
import MovieList from "../components/movie/list"
import Carrousel from "../components/movie/carrousel";
import PropTypes from "prop-types";

export default function Home(props) {

    const {movies, moviesByCategories, imgSliders, updateStateMovies} = props

    useEffect(() => {
        const fetchData = async () => {
            if (movies === undefined || movies.length === 0) {
                let resMovies = await getMovies()
                updateStateMovies(resMovies)
            }
        }

        fetchData()
    }, [])

    const categories = Object.keys(moviesByCategories).sort()
    const displayCarrouseul = imgSliders.length > 3

    return (
        <React.Fragment>
            {categories.length == 0 && (<div className="alert alert-danger" role="alert">
                No data fetched from the API.<br/>Please Check if the Nest.js project is online and on port 3001</div>)}
            {displayCarrouseul && (<Carrousel imgSliders={imgSliders}/>)}

            {categories.map((c: string, index: number) => {
                return (
                    <MovieList
                        key={index}
                        category={c}
                        movieList={moviesByCategories[c]}
                    />
                )
            })}

            <div className="d-sm-flex align-items-center justify-content-between mt-1 mb-3">
            </div>
        </React.Fragment>
    )
}

Home.propTypes = {
    movies: PropTypes.array,
    moviesByCategories: PropTypes.array,
    imgSliders: PropTypes.array,
    updateStateMovies: PropTypes.func
};

// Same approach for defaultProps too
Home.defaultProps = {
    movies: [],
    moviesByCategories: [],
    imgSliders: [],
    updateStateMovies: null,
};