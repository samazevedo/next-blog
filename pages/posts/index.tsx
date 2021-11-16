import { AllPosts } from '../../components/All-posts/All-posts.component'
import { getAllPosts } from '../../lib/posts-util'
import Head from 'next/head'
import { Fragment } from 'react'

function AllPostsPage({ posts }) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='A list of all my posts' />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPosts()
    return {
        props: {
            posts: allPosts,
        },
    }
}

export default AllPostsPage
