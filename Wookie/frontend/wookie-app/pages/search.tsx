import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
    InstantSearch,
    RefinementList,
    Configure,
} from 'react-instantsearch-dom';

import WookieSearchBox from "../components/customSearchBox";
import WookieHits from "../components/customHits";

const searchClient = algoliasearch(
    'OQGENTZBQK',
    '916ae47903908228bdc468aee604cb36'
);

export default function Search(props) {

    return (
        <InstantSearch indexName="dev_wookie_movie" searchClient={searchClient}>
            <div className="right-panel">
                <Configure  />
                <p>search box</p>
                <WookieSearchBox />
                <WookieHits  />
            </div>
        </InstantSearch>
    )
}


// Hit.propTypes = {
//     hit: PropTypes.object.isRequired,
// };