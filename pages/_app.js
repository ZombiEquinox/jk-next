import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import 'include-media/dist/_include-media.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
