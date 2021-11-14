import React, { Fragment } from 'react'
import Hero from '../components/home/Hero/Hero.component'
import { FeaturedPosts } from '../components/home/Featured-posts/Featured-posts.component'
import { getFeaturedPosts } from '../utils/posts-util'

function HomePage({ posts }) {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={posts} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const FeaturedPosts = await getFeaturedPosts()

    return {
        props: {
            posts: FeaturedPosts,
        },
        // revalidate: 1800,
    }
}
export default HomePage
