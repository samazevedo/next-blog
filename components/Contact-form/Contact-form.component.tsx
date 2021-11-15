import styles from './Contact-form.module.css'
import { useState, useEffect } from 'react'
import Notification from '../../ui/ui/notification'

const sendContactData = async (contactDetails) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
    }
}

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState('') // 'success' or 'error' peding
    const [requestError, setRequestError] = useState('')

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus('')
                setRequestError('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setRequestStatus('pending')
        try {
            await sendContactData({ name, email, message })
            setRequestStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            setRequestError(error.message)
            setRequestStatus('error')
        }
    }

    let notification
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Please wait while we send your message',
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'success!',
            message: 'Message sent successfully!',
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Something went wrong',
            message: requestError,
        }
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className={styles.actions}>
                        <button>Send Message</button>
                    </div>
                </div>
            </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    )
}
