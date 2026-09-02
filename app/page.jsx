import Image from "next/image"

export default function Home(){
    return(
        <main style={{padding:'40px'}}>
            <p>This is main components</p>

            <Image
                src='/spider.jpg'
                // src="https://unsplash.com/photos/a-spider-man-in-a-suit-with-glowing-eyes-V0zU9A_Zq9A"
                alt="hero image"
                width={300}
                height={450}
            />
        </main>
    )
}