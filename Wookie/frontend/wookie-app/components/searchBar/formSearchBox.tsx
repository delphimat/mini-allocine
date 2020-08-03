import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <form noValidate action="" role="search" className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
            <input
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
                className="form-control bg-white border-0 small"
                placeholder="Search for Movies ..."
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
                <button className="btn bg-white" type="button">
                    <i className="fas fa-search fa-sm"></i>
                </button>
            </div>
        </div>
    </form>

);

const  WookieSearchBox = connectSearchBox(SearchBox);


export default WookieSearchBox