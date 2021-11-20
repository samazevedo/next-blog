import { PostHeader } from '../Post-header/Post-header.component'
import { Ipost } from '../../interfaces/interfaces'

import styles from './Post-content.module.css'
import ReactMarkdown from 'react-markdown'

interface Props {
    post: Ipost
}

export const PostContent: React.FC<Props> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    // override the default image rendering
    // const customRenderers = {
    //     image(image): JSX.Element {
    //         return (
    //             <Image
    //                 src={`/images/posts/${post.slug}/${image.src}`}
    //                 alt={image.alt}
    //                 width={600}
    //                 height={300}
    //             />
    //         )
    //     },
    //     paragraph(paragraph): JSX.Element {
    //         const { node } = paragraph

    //         if (node.children[0].type === 'image') {
    //             const image = node.children[0]
    //             return (
    //                 <div className={styles.image}>
    //                     <Image
    //                         src={`/images/posts/${post.slug}/${image.src}`}
    //                         alt={image.alt}
    //                         width={600}
    //                         height={300}
    //                     />
    //                 </div>
    //             )
    //         }
    //     },
    // }
    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    )
}
