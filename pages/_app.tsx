import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import '../styles/globals.css'

library.add(
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
  faChevronDown,
  faSearch
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
