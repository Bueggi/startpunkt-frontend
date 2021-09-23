import '../styles/globals.css'
import { CourseProvider } from '../context/courseContext'
import { AuthProvider } from '@/context/authContext'
function MyApp({ Component, pageProps }) {
  return (<AuthProvider>
    <CourseProvider>
      <Component {...pageProps} />
    </CourseProvider>
  </AuthProvider>)
}

export default MyApp
