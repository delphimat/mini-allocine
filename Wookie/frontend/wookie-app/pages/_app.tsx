import App from 'next/app'
import Head from "next/head";
import Navbar from "../components/navbar"

class MovieApp extends App {

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
        <div>
          <Navbar/>
          <Component {...pageProps} />
        </div>

    )
  }

}

export default MovieApp
