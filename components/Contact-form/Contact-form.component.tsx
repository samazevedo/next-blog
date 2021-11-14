import styles from './Contact-form.module.css'

export const ContactForm = () => {
    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            rows={5}
                        ></textarea>
                    </div>
                    <div className={styles.actions}>
                        <button>Send Message</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
