/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return <> <Layout>
    <Component {...pageProps} />
  </Layout ></>
}

export default MyApp
