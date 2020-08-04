import App from 'next/app'
import Head from "next/head";
import Navbar from "../components/layout/navbar"
import TopBar from "../components/layout/topbar";
import {randomize} from "../helpers/functions";

interface IState {
    movies: [],
    moviesByCategories: [],
    imgSliders: [],
    categoriesSelected: [],
    ratingSelected?: number
}

class MovieApp extends App {

    state: IState;

    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext)
        return {...appProps}
    }

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            moviesByCategories: [],
            imgSliders: [],
            categoriesSelected: [],
            ratingSelected: null
        }
    }

    formatDataMovies = (movies, rating ?: number, categoriesSelected ?: String[] ) => {
        let moviesByCategories = []

        movies
            .filter(m => {
                // if the option rating is set and the movie is below, so we skip it
                if (rating && m.imdb_rating < rating) {
                    return false
                }


                // if the option categories is set and the movie dont have the genre, so we skip it
                if (categoriesSelected.length && m.genres.length) {
                    const intersection = categoriesSelected.filter(element => m.genres.includes(element));
                    return 0 < intersection.length
                }

                return true
            })
            .map(m => {
                m.genres.map(genre => {
                    if (moviesByCategories[genre] === undefined) {
                        moviesByCategories[genre] = []
                    }
                    moviesByCategories[genre].push(m)
                })
            })

        // create categories for movies
        this.setState({
            movies: [...movies],
            moviesByCategories: moviesByCategories,
            imgSliders: movies.slice(0, 8)
        })
    }

    updateStateRating = (minRating) => {
        let ratingSelected = this.state.ratingSelected

        if (ratingSelected === null) {
            ratingSelected = minRating
        } else {
            ratingSelected = null
        }

        this.setState({
            ratingSelected: ratingSelected,
        })

        this.formatDataMovies([...this.state.movies],  ratingSelected, this.state.categoriesSelected)
    }

    updateStateCategories = (categorie: string) => {
        let categoriesSelected : string[] = this.state.categoriesSelected

        if (categoriesSelected.includes(categorie)) {
            // remove the categorie
            categoriesSelected = categoriesSelected.filter(c => (c != categorie))
        } else {
            // add the categorie
            categoriesSelected.push(categorie)
        }

        this.setState({
            categoriesSelected: [...categoriesSelected],
        })

        this.formatDataMovies([...this.state.movies],  this.state.ratingSelected, categoriesSelected)
    }

    updateStateHits = (rows) => {
        this.formatDataMovies(rows,  this.state.ratingSelected, this.state.categoriesSelected)
    }

    updateStateMovies = (rows) => {
        this.formatDataMovies(randomize(rows),  this.state.ratingSelected, this.state.categoriesSelected)
    }

    render() {
        const {Component, pageProps} = this.props

        return (
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <link rel="icon" type="image/png" href="/img/logo-icon.png"/>
                    <title>Wookie - Movies</title>
                    <link rel="stylesheet" type="text/css" href="/vendor/slick/slick.min.css"/>
                    <link rel="stylesheet" type="text/css" href="/vendor/slick/slick-theme.min.css"/>
                    <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
                    <link href="/css/style.min.css" rel="stylesheet"/>
                </Head>
                <div id="page-top">
                    <div id="wrapper">
                        <Navbar
                            categoriesSelected={this.state.categoriesSelected}
                            ratingSelected={this.state.ratingSelected}

                            updateStateCategories={this.updateStateCategories}
                            updateStateRating={this.updateStateRating}
                        />
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <TopBar updateStateHits={this.updateStateHits}/>
                                <div className="container-fluid">
                                    <Component
                                        {...pageProps}
                                        moviesByCategories={this.state.moviesByCategories}
                                        movies={this.state.movies}
                                        imgSliders={this.state.imgSliders}
                                        updateStateMovies={this.updateStateMovies}

                                    />
                                </div>
                            </div>
                            <footer className="sticky-footer bg-white">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                    <span>Wookie <i className="fas fa-heart fa-fw text-danger"></i> by
                                        <a target="_blank" href="https://validitylabs.org/"> ValidityLabs </a>
                                    </span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
                {/*<script src="/js/private.js"></script>*/}
            </div>


        )
    }

}


export default MovieApp
