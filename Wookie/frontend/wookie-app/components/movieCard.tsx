import React from "react";

const MovieCard = (props) => {

    const { movieCard } = props

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card m-card shadow border-0">
                <a href={`/movie/${movieCard.id}`}>
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
                            <small className="text-muted">{movieCard.classification}</small>
                            <small className="text-danger">
                            <i className="fas fa-calendar-alt fa-sm text-gray-400"></i> { movieCard.released_on}</small>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MovieCard