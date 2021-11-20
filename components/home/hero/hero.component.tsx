import Image from 'next/image'
import styles from './hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/site/me.jpg'
                    alt='me'
                    width={350}
                    height={350}
                />
            </div>
            <h1>Hello, I am Mia</h1>
            <h2>Welcome to blog!</h2>
            <p>I am a blogger and web developer.</p>
            <p>
                This blog I share my thoughts and experiences about web
                development and programming.
            </p>
        </section>
    )
}
