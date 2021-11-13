import { AllPosts } from '../../components/All-posts/All-posts.component'

const DATA = [
    {
        title: 'How to build a website 1',
        excerpt:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'how-to-build-a-website.jpg',
        date: '2020-05-01',
        slug: 'how-to-build-a-website',
    },
    {
        title: 'How to build a website 2',
        excerpt:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'how-to-build-a-website.jpg',
        date: '2020-05-01',
        slug: 'how-to-build-a-website-2',
    },
    {
        title: 'How to build a website 3',
        excerpt:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'how-to-build-a-website.jpg',
        date: '2020-05-01',
        slug: 'how-to-build-a-website-3',
    },
    {
        title: 'How to build a website 4',
        excerpt:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'how-to-build-a-website.jpg',
        date: '2020-05-01',
        slug: 'how-to-build-a-website-4',
    },
    {
        title: 'How to build a website 5',
        excerpt:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'how-to-build-a-website.jpg',
        date: '2020-05-01',
        slug: 'how-to-build-a-website-5',
    },
]

function AllPostsPage() {
    return <AllPosts posts={DATA} />
}

export default AllPostsPage
