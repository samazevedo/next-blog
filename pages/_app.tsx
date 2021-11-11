import '../styles/globals.css'
import { Layout } from '../components/Layouts/Layout/Layout.component'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
