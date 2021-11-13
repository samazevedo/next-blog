import Image from 'next/image'
import styles from './Post-header.module.css'

interface Props {
    title: string
    image: string
}

export const PostHeader: React.FC<Props> = ({ title, image }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </header>
    )
}
