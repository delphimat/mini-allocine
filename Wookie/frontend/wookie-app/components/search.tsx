import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
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

    return (
        <InstantSearch indexName="dev_wookie_movie" searchClient={searchClient}>
                <Configure  />
                <WookieSearchBox />
                <WookieHits  />
        </InstantSearch>
    )
}


// Hit.propTypes = {
//     hit: PropTypes.object.isRequired,
// };