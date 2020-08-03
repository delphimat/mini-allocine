import { getCategories } from "../actions/index"
import {useState, useEffect} from "react";
import Link from 'next/link'


const NavBar = (props) => {

    const {categoriesSelected, ratingSelected, updateStateCategories, updateStateRating} = props

    const [categories, setCategories] = useState([])
    const [isReady, setReady] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            console.log("chargement categorie")
            const resCategories = await getCategories()
            setCategories(resCategories)
            setReady(1)
        }

        fetchData();
    }, [isReady])

    const changeSelectRating = (e) => {
        updateStateRating(e.target.getAttribute('data-rating'))
    }

    const changeSelectCategorie= (e) => {
        updateStateCategories(e.target.getAttribute('data-categorie'))
    }


    return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link href={"/"} as={"/"}>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-text mx-3">
                        <img src="/img/logo3.png" alt=""/>
                    </div>
                </a>
            </Link>
            <li className="nav-item active">

                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-film"></i>
                    <span>Rating</span>
                </a>

            </li>

            <li  className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fa fa-star" aria-hidden="true" onClick={changeSelectRating} data-rating={8.5} > Top movies +8.5 / 10 </i>
                    {ratingSelected && (<i className="fa fa-check ml-3" aria-hidden="true"></i>)}
                </a>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">

                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-film"></i>
                    <span>Movies</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            {
                categories.map((categorie, index) => (
                    <li key={index} className="nav-item">
                        <a className="nav-link" href="#" >
                            <i  className="fas fa-fw fa-fire"></i><span onClick={changeSelectCategorie}   data-categorie={categorie}> {categorie} </span>
                            {categoriesSelected.includes(categorie) && (<i className="fa fa-check ml-3" aria-hidden="true"></i>)}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavBar