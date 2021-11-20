import Head from 'next/head'
import React, { Fragment } from 'react'
import { Hero } from '../components/Hero/Hero.component'
import { FeaturedPosts } from '../components/Featured-posts/Featured-posts.component'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage({ posts }) {
    return (
        <Fragment>
            <Head>
                <title>MIA's Blog</title>
                <meta
                    name='description'
                    content='Blogging about web and programming'
                />
            </Head>
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
