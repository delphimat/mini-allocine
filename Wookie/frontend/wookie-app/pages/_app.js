import App from 'next/app'
import Head from 'next/head'
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>

        </Head>
        <Navbar />
        <div className="base-page">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
  )
}

export default MyApp
