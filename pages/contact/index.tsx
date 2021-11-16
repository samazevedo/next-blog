import { ContactForm } from '../../components/Contact-form/Contact-form.component'
import Head from 'next/head'
import { Fragment } from 'react'
export default function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
                <meta name='description' content='Send me a message' />
            </Head>
            <ContactForm />
        </Fragment>
    )
}
