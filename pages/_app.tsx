import Head from 'next/head'

import '../styles/globals.css'
import { Layout } from '../components/Layouts/Layout/Layout.component'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta name='viewport' content='width=device-width' />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
