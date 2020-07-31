const NavBar = () => {
    return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-text mx-3">
                    <img src="/img/logo3.png" alt=""/>
                </div>
            </a>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-film"></i>
                    <span>Movies</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-fire"></i>
                        <span> - Action </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-fire"></i>
                        <span> - Horror </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-fire"></i>
                        <span> - Fun </span>
                    </a>
                </li>
        </ul>
    )
}
export default NavBar