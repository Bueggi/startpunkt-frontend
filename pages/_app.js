import '../styles/globals.css'
import { CourseProvider } from '../context/courseContext'
function MyApp({ Component, pageProps }) {
  return <CourseProvider>
    <Component {...pageProps} />
  </CourseProvider>
}

export default MyApp
