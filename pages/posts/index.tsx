import { AllPosts } from '../../components/All-posts/All-posts.component'
import { getAllPosts } from '../../lib/posts-util'

function AllPostsPage({ posts }) {
    return <AllPosts posts={posts} />
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
