import { useRouter } from 'next/router'
import { getMovieBySlug } from '../../../actions'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import { MovieType } from "../../../model/movie";


const Movie = (props) => {

    const [movie , setMovie] : [MovieType[], Dispatch<SetStateAction<any>> ]  = useState([])

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const fetchData = async () => {
            let resMovie = await getMovieBySlug(id)

            setMovie(resMovie)
        }
        fetchData();
    }, [])


    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="cover-pic">
                    <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-4 love-box">
                        <h6 className="text-gray-900 mb-0 font-weight-bold">
                            <i className="fas fa-heart text-danger"></i> {movie.imdb_rating}
                        </h6>
                        <small className="text-muted">{movie.length}</small>
                    </div>
                    <img src={movie.backdrop} className="img-fluid" alt="..."/>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3">
                <div className="bg-white p-3 widget shadow rounded mb-4">
                    <img src={movie.poster} className="img-fluid rounded"
                         alt="..."/>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Director</h1>
                        <p>{ movie.director }</p>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Cast</h1>
                        <p>{ movie.cast && movie.cast.join(', ') }</p>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">classification</h1>
                        <p>{ movie.classification}</p>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9">
                <div className="bg-white info-header shadow rounded mb-4">
                    <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                        <div className="col-lg-7 m-b-4">
                            <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                                {movie.title} <small>{ new Date(movie.released_on).toLocaleDateString()}</small></h3>
                            <p className="mb-0 text-gray-800"><small className="text-muted">
                                <i className="fas fa-film fa-fw fa-sm mr-1"></i> { movie.genres && movie.genres.join(", ") }</small>
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-3 px-4">
                        <div className="col-lg-6 m-b-4">
                            <p className="mb-0 text-gray-900">
                                <i className="fas fa-money-bill fa-sm fa-fw mr-1"></i> Time - <span
                                className="text-white rounded px-2 py-1 bg-info">{movie.length}</span></p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 widget shadow rounded mb-4">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                               aria-controls="home" aria-selected="true">Overview</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p className="mt-0 mb-3">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}


export default Movie