import React from "react"
import { getMovies } from "../actions/index"
import { useState, useEffect} from "react"
import MovieList from "../components/movieList"
import {use} from "ast-types";

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

    return (
        <React.Fragment>
            <div className="wookie-slider slick-initialized slick-slider">
                <button className="slick-prev slick-arrow" aria-label="Previous" type="button" >Previous
                </button>

                <div className="slick-list draggable" style={{padding: "0px 200px"}}>
                    <div className="slick-track"  style={{opacity: "1", width : "2880px", transform : "translate3d(-1080px, 0px, 0px)" }}>
                       {
                            imgSliders && imgSliders.map((i, index) => (
                                    <div key={index} className="wookie-slider-item slick-slide slick-cloned" tabIndex={-1} style={{width: "344px"}}
                                         data-slick-index="-2" aria-hidden="true">
                                        <img src={i.backdrop} className="img-fluid rounded" alt="..."/>
                                    </div>
                            ))
                        }
                    </div>
                </div>
                <button className="slick-next slick-arrow" aria-label="Next" type="button" >Next</button>
            </div>

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
