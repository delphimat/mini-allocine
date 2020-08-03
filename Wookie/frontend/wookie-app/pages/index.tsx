import React from "react"

import { getMovies } from "../actions/index"
import { useState, useEffect} from "react"
import MovieList from "../components/movie/list"
import Carrousel from "../components/movie/carrousel";

export default function Home(props) {

    const { movies, moviesByCategories, imgSliders , updateStateMovies } = props

    useEffect(() => {
        const fetchData = async () => {
            if (movies === undefined || movies.length === 0 ) {
                console.log("!!! Chargement movie api !!! ")
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
            {displayCarrouseul && (<Carrousel imgSliders={imgSliders} />)}

            {categories.map((c: string, index : number) => {
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
