import styles from './post-grid.module.css'
import { PostItem } from '../Post-item/Post-item.component'
import { Ipost } from '../../interfaces/interfaces'
import React from 'react'

interface Props {
    posts: Ipost[]
}

export const PostGrid: React.FC<Props> = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    )
}
