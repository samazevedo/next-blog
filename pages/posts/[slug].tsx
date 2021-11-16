import { Fragment } from 'react'
import { Ipost } from '../../interfaces/interfaces'
import { PostContent } from '../../components/Post-content/Post-content.component'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import Head from 'next/head'

interface Props {
    post: Ipost
}

const SinglePostPage: React.FC<Props> = ({ post }) => {
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt} />
            </Head>

            <PostContent post={post} />
        </Fragment>
    )
}
export function getStaticProps(context) {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    }
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles()

    const slugs = postFilenames.map((filename) =>
        filename.replace(/\.mdx?$/, '')
    )

    return {
        // pre-build all paths
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    }
}

export default SinglePostPage
