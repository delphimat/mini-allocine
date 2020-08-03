import algoliasearch from 'algoliasearch/lite';
import React, { Component, useState } from 'react';
import {
    InstantSearch,
    Configure,
} from 'react-instantsearch-dom';

import WookieSearchBox from "./customSearchBox";
import WookieHits from "./customHits";

const searchClient = algoliasearch(
    'OQGENTZBQK',
    '916ae47903908228bdc468aee604cb36'
);


export default function Search(props) {

    const { updateStateHits } = props
    const [ isSearchEnabled, setSearchEnabled] = useState(false)

    const updateSearch = () => {
        setSearchEnabled(true)
    }

    // we remove the call to the search bar if the user is not asking for
    return (
        !isSearchEnabled ?
            <div className="input-group" style={{width: "30rem"}}>
                <input onFocus={updateSearch} type="search"
                       className="form-control bg-white border-0 small"
                       placeholder="Search for Movies ..."
                       aria-label="Search"
                       aria-describedby="basic-addon2"  />
                        <div className="input-group-append">
                            <button   className="btn bg-white" type="button"> <i className="fas fa-search fa-sm"></i></button>
                        </div>
            </div>
            :   <InstantSearch
                        indexName="dev_wookie_movie"
                        searchClient={searchClient}
                        stalledSearchDelay={500}
                        refresh={false}
                    >
                        <Configure/>
                        <div>
                            <WookieSearchBox />
                        </div>
                        <div id="wookie-hits-list">
                            <WookieHits updateStateHits={updateStateHits} />
                        </div>

                    </InstantSearch>
    );
}


// Hit.propTypes = {
//     hit: PropTypes.object.isRequired,
// };

