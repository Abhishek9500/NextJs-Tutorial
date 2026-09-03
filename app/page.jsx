import Counter from './components/counter'
import Link from 'next/link';

export default async function Home(){

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

    console.log("Data = ",data);

    return(
        <div>
            <h1>Home Page</h1>

            <Link href='/server-client-demo'>get-server-client-demo</Link>

            {/* {
                data.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </li>
                    
                ))
            } */}
            <Counter/>
        </div>
    )
}