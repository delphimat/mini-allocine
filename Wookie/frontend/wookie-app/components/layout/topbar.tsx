import Search from "../searchBar/search";
import PropTypes from "prop-types";
import NavBar from "./navbar";

const TopBar = (props) => {

    const { updateStateHits } = props

    return (
        <nav className="navbar navbar-expand navbar-dark topbar mb-4 pl-0 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <Search updateStateHits={updateStateHits} />

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>

                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                         aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                       placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </li>
                
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Mathieu Delphin</span>
                        <img className="img-profile rounded-circle" src="/img/mathieu.jpg"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

TopBar.propTypes = {
    updateStateHits: PropTypes.func,
};

// Same approach for defaultProps too
TopBar.defaultProps = {
    updateStateHits: null,
};

export default TopBar