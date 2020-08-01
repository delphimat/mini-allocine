import React from "react";
import MovieCard from "./movieCard";

const MovieList = (props) => {

    const { category, movieList } = props


    return (
        <React.Fragment>
            <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3">
                <h1 className="h5 mb-0 text-gray-900">{category}</h1>
                <a href="#" className="d-none d-sm-inline-block text-xs">View All <i className="fas fa-eye fa-sm"></i></a>
            </div>
            <div className="row">
                {movieList.map((m, index) => {
                        return (<MovieCard key={index} movieCard={m} />)
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default MovieList