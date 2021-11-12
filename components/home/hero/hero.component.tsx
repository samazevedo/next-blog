import Image from 'next/image'

import styles from './hero.module.css'

const Hero = () => {
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
            <h1>Hi, I'm Mia</h1>
            <p>Welcome to blog!</p>
            <p>I am a blogger and a developer.</p>
        </section>
    )
}
export default Hero
