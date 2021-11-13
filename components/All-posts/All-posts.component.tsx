import { PostGrid } from '../Post-grid/Post-grid.component'
import styles from './All-posts.module.css'

export const AllPosts = ({ posts }): JSX.Element => {
    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts} />
        </section>
    )
}
