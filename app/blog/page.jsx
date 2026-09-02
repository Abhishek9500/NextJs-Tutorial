import Link from "next/link"

const blogs = [
    {slug:"nextjs",title:"NextJS Basic"},
    {slug:"react",title:"React Basic"},
    {slug:"node",title:"Node Basic"},
]

export default function BlogPage(){
    return(
        <div>
            <h1>Blog Page</h1>
            {console.log(blogs)}
            <ul>
                {
                    blogs.map((blog)=>(
                        <li key={blog.slug}>
                            <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <p>Welcome to Blog page</p>
        </div>
    )
}