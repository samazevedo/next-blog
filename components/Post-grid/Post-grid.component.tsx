import styles from './post-grid.module.css'
import { PostItem } from '../Post-item/Post-item.component'
import React from 'react'

interface Props {
    posts: [
        {
            title: string
            excerpt: string
            image: string
            date: string
            slug: string
        }
    ]
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
