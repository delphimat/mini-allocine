import React from "react"
import {getMovies} from "../actions/index"
import {useState, useEffect} from "react";
import {randomize} from "../helpers/functions"
import MovieList from "../components/movieList";
import {type} from "os";


export default function Home() {

    // const [movies, setMovies] = useState([])
    const [imgSliders, setImgSliders] = useState([])
    const [moviesByCategories, setMoviesByCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let resMovies = await getMovies()
            let resMoviesByCategories = []
            console.log(typeof resMoviesByCategories)

            resMovies = randomize(resMovies)
            resMovies.map( m => {
                    m.genres.map(genre => {
                        if (resMoviesByCategories[genre] === undefined){
                            resMoviesByCategories[genre] = []
                        }
                        resMoviesByCategories[genre].push(m)
                    })
            })

            // get 8 images to display from the movies and random
            setImgSliders(resMovies.slice(0, 8))
            // create categories for movies
            setMoviesByCategories(resMoviesByCategories)
        }

        fetchData();
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


            {/*<div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3">*/}
            {/*    <h1 className="h5 mb-0 text-gray-900">Movies</h1>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <div className="col-xl-3 col-md-6 mb-4">*/}
            {/*        <div className="card m-card shadow border-0">*/}
            {/*            <a href="/movie/id">*/}
            {/*                <div className="m-card-cover">*/}
            {/*                    <div*/}
            {/*                        className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">*/}
            {/*                        <h6 className="text-gray-900 mb-0 font-weight-bold"><i*/}
            {/*                            className="fas fa-heart text-danger"></i> 88%*/}
            {/*                        </h6>*/}
            {/*                        <small className="text-muted">23,421</small>*/}
            {/*                    </div>*/}
            {/*                    <img src="/img/m1.jpg" className="card-img-top"*/}
            {/*                         alt="..."/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body p-3">*/}
            {/*                    <h5 className="card-title text-gray-900 mb-1">Jumanji: The Next Level</h5>*/}
            {/*                    <p className="card-text"><small className="text-muted">English</small> <small*/}
            {/*                        className="text-danger"><i*/}
            {/*                        className="fas fa-calendar-alt fa-sm text-gray-400"></i> 22 AUG</small></p>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-xl-3 col-md-6 mb-4">*/}
            {/*        <div className="card m-card shadow border-0">*/}
            {/*            <a href="/movie/id">*/}
            {/*                <div className="m-card-cover">*/}
            {/*                    <div*/}
            {/*                        className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">*/}
            {/*                        <h6 className="text-gray-900 mb-0 font-weight-bold"><i*/}
            {/*                            className="fas fa-heart text-danger"></i> 50%*/}
            {/*                        </h6>*/}
            {/*                        <small className="text-muted">8,784</small>*/}
            {/*                    </div>*/}
            {/*                    <img src="/img/m2.jpg" className="card-img-top"*/}
            {/*                         alt="..."/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body p-3">*/}
            {/*                    <h5 className="card-title text-gray-900 mb-1">Gemini Man</h5>*/}
            {/*                    <p className="card-text"><small className="text-muted">English</small> <small*/}
            {/*                        className="text-danger">*/}
            {/*                        <i className="fas fa-calendar-alt fa-sm text-gray-400"></i> 22 AUG</small></p>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-xl-3 col-md-6 mb-4">*/}
            {/*        <div className="card m-card shadow border-0">*/}
            {/*            <a href="/movie/id">*/}
            {/*                <div className="m-card-cover">*/}
            {/*                    <div*/}
            {/*                        className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">*/}
            {/*                        <h6 className="text-gray-900 mb-0 font-weight-bold"><i*/}
            {/*                            className="fas fa-heart text-danger"></i> 20%*/}
            {/*                        </h6>*/}
            {/*                        <small className="text-muted">69,123</small>*/}
            {/*                    </div>*/}
            {/*                    <img src="/img/m3.jpg" className="card-img-top"*/}
            {/*                         alt="..."/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body p-3">*/}
            {/*                    <h5 className="card-title text-gray-900 mb-1">The Current War</h5>*/}
            {/*                    <p className="card-text"><small className="text-muted">English</small> <small*/}
            {/*                        className="text-danger"><i*/}
            {/*                        className="fas fa-calendar-alt fa-sm text-gray-400"></i> 22 AUG</small></p>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-xl-3 col-md-6 mb-4">*/}
            {/*        <div className="card m-card shadow border-0">*/}
            {/*            <a href="/movie/id">*/}
            {/*                <div className="m-card-cover">*/}
            {/*                    <div*/}
            {/*                        className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">*/}
            {/*                        <h6 className="text-gray-900 mb-0 font-weight-bold"><i*/}
            {/*                            className="fas fa-heart text-danger"></i> 74%*/}
            {/*                        </h6>*/}
            {/*                        <small className="text-muted">88,865</small>*/}
            {/*                    </div>*/}
            {/*                    <img src="/img/m4.jpg" className="card-img-top"*/}
            {/*                         alt="..."/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body p-3">*/}
            {/*                    <h5 className="card-title text-gray-900 mb-1">Charlie's Angels</h5>*/}
            {/*                    <p className="card-text"><small className="text-muted">English</small> <small*/}
            {/*                        className="text-danger"><i*/}
            {/*                        className="fas fa-calendar-alt fa-sm text-gray-400"></i> 22 AUG</small></p>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="d-sm-flex align-items-center justify-content-between mt-1 mb-3">
            </div>
        </React.Fragment>
)
}
