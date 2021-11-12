import styles from './Featured-posts.module.css'
import { PostGrid } from '../../Post-grid/Post-grid.component'

export const FeaturedPosts = ({ posts }) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts} />
        </section>
    )
}
