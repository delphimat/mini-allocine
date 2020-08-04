import React from "react";
import Link from 'next/link'
import PropTypes from "prop-types";
import TopBar from "../layout/topbar";

const MovieCard = (props) => {

    const { movieCard } = props

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card m-card shadow border-0">
                <Link href={"/movie/[id]"} as={`/movie/${movieCard.slug}`}>
                    <a>
                        <div className="m-card-cover">
                            <div
                                className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                                <h6 className="text-gray-900 mb-0 font-weight-bold">
                                    <i className="fas fa-heart text-danger"></i> {movieCard.imdb_rating}
                                </h6>
                                <small className="text-muted">{movieCard.length}</small>
                            </div>
                            <img src={movieCard.poster} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body p-3">
                            <h5 className="card-title text-gray-900 mb-1">{movieCard.title}</h5>
                            <p className="card-text">
                                <small className="text-muted mr-2">{movieCard.classification}</small>
                                <small className="text-danger">
                                    <i className="fas fa-calendar-alt fa-sm text-gray-400"></i> { new Date(movieCard.released_on).toLocaleDateString()}</small>
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movieCard: PropTypes.object,
};

// Same approach for defaultProps too
MovieCard.defaultProps = {
    movieCard: null,
};


export default MovieCard