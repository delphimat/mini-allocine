import { connectHits } from 'react-instantsearch-dom';
import React from "react";
import Link from "next/link";
import { useState, useEffect} from "react"

const Hits = ({ hits, updateStateHits }) => {

    console.log("Call - Component HITS ")

    const [canDisplay, setCanDisplay] = useState(false)

    useEffect(() => {
        updateStateHits(hits)
        // add in the confil file later, we dont want to display when there is too many choices
        if (hits.length < 12) {
            setCanDisplay(true)
        } else {
            setCanDisplay(false)
        }

    },[hits]);

    const clickHits = (e) => {
        setCanDisplay(false)
    }

    const mouseEnterHits = (e) => {
        e.target.classList.add('active');
    }

    const mouseLeaveHits = (e) => {
        e.target.classList.remove('active');
    }

    return (
    <React.Fragment>
         <ul id="searchBar" className="list-group">
            { canDisplay && hits.map( h => {
                return (
                        <li
                            onMouseEnter={mouseEnterHits}
                            onMouseLeave={mouseLeaveHits}
                            key={h.id}
                            id={h.slug} className="list-group-item"
                        >
                            <Link
                                href={"/movie/[id]"}
                                as={`/movie/${h.slug}`}
                            >
                                <a onClick={clickHits}>
                                    <span className="text-gray-900 mb-0 font-weight-bold">
                                        <i className="fas fa-heart text-danger"></i> {h.imdb_rating}
                                    </span>
                                    <span className="card-title text-gray-900 ml-2"><strong>{h.title}</strong></span> - <span>{h.director}</span>
                                    <br/>
                                    <span className="pl-3">{h.genres.join(", ")}</span>
                                </a>
                            </Link>
                        </li>
                )
            })}
        </ul>
    </React.Fragment>
    )
};

const WookieHits = connectHits(Hits);

export default WookieHits