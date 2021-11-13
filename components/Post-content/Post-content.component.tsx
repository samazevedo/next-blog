import { PostHeader } from '../Post-header/Post-header.component'
import styles from './Post-content.module.css'

const POST_DATA = {
    title: 'How to build a website 1',
    image: 'how-to-build-a-website.jpg',
    date: '2020-05-01',
    slug: 'how-to-build-a-website',
    content: `  # How to build a website`,
}
export function PostContent() {
    const imagePath = `/images/posts/${POST_DATA.slug}/${POST_DATA.image}`
    return (
        <article className={styles.content}>
            <PostHeader title={POST_DATA.title} image={imagePath} />
            {POST_DATA.content}
        </article>
    )
}
