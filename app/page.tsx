interface Post{
    id:number,
    title:string,
    body:string
}

export default async function Home(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache:"no-store"  // no-store dynamic fatching any change in api chnge in ui
    })

    const posts: Post[] = await res.json();

    return(
        <div>
            <h1>Posts Fetch Data by server</h1> 
            <ul>
                <h1>Static Rendring</h1>
                {
                    posts.slice(0,5).map(post =>(
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    ))
                }
            </ul>
            <h1>Dynamic rendring</h1>
            <pre>{JSON.stringify(posts.slice(0,2),null,2)}</pre>
        </div>
    )
}