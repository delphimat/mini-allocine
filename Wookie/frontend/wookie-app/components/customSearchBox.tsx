import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <form noValidate action="" role="search">
        <input
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
        />
        <button onClick={() => refine('')}>reload query</button>
        {isSearchStalled ? 'Marco Polo' : ''}
    </form>
);

const  WookieSearchBox = connectSearchBox(SearchBox);


export default WookieSearchBox