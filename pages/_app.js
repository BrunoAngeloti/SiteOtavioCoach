import '../styles/globals.css'
import FacebookPixel from '../components/FacebookPixel'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
