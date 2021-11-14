import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// create the post path
const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory)
}

// get file name as argument
export function getPostData(postIdentifier: string) {
    // remove the extension from the file name
    const postSlug = postIdentifier.replace(/\.md$/, '')
    // get the full path to the file
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        isFeatured: data.isFeatured,
        date: data.date,
        content: content,
    }

    return postData
}

// getting all posts
export const getAllPosts = async () => {
    const postsFiles = await getPostsFiles()

    // loop through all the posts
    const allPosts = postsFiles.map((postFile) => {
        return getPostData(postFile)
    })

    // sort the posts by date typescript
    const sortedPosts = allPosts.sort(
        (a, b) => +new Date(b.date) - +new Date(a.date)
    )
    // javascript sort array function
    // const sortedPosts = allPosts.sort((postA, postB) =>
    //     postA.date < postB.date ? 1 : -1
    // )

    return sortedPosts
}

export async function getFeaturedPosts() {
    const allPosts = await getAllPosts()

    const featuredPosts = allPosts.filter((post) => post.isFeatured)

    return featuredPosts
}
