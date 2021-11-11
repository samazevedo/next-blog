import Image from 'next/image'

import styles from './hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/site/me.jpg'
                    alt='me'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, Im a Mia</h1>
            <p>I am a blogger and a developer.</p>
        </section>
    )
}
export default Hero
