import {getPostBySlug} from '../../lib/posts';

import type { Metadata } from 'next';

type Props = {
    params:Promise<{slug:string}>
}

export async function generateMetadata({params}:Props): Promise<Metadata> {
    const {slug} = await params;

    const post = await getPostBySlug(slug);

    if(!post){
        return{
            title:"Post Not Found !"
        }
    };

    return {
        title:post.title,
        description:post.description,
        openGraph:{
            title:post.title,
            description:post.description,
            images:["/spider.avif"]
        }
    }
}

export default async function PostPage({params}:Props) {
    const {slug} = await params;
    console.log(slug);
    const post = await getPostBySlug(slug);

    if(!post){
        return <h1>Post Not Found !</h1>
    }

    console.log(post);

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.content}</p>
        </article>
    )
}