import styles from './Post-item.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Ipost } from '../../interfaces/interfaces'

interface PostItemProps {
    post: Ipost
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const { title, slug, date, excerpt, image } = post
    const newDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    // construct img path
    const imagePath = `/images/posts/${slug}/${image}`

    const linkPath = `/posts/${slug}`
    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{newDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}
