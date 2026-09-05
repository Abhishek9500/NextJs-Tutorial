export type Post = {
    slug:string,
    title:string,
    description:string,
    content:string
};

export const posts:Post[]=[
    {
        slug:'nextjs',
        title:'Learn Nextjs',
        description:'learn nextjs',
        content:'next js is powerful freamwork'
    },
     {
        slug:'mongodb',
        title:'Learn mongodb',
        description:'A Compareshive guide to learning mongodb',
        content:'mongodb is powerful database'
    },
     {
        slug:'javascript',
        title:'Learn javascript ',
        description:'A Compareshive guide to learning javascript',
        content:'javascript js is powerful lalnguage'
    },
];

export function getPosts(){
    return posts;
}

export function getPostBySlug(slug:string):Post|undefined{
    return posts.find(post=>post.slug===slug);
}

