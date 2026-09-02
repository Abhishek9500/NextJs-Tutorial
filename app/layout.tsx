import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
  return(
    <html lang="en">
    <head>
      <title>Abhishek Next.Js Course</title>
    </head>
    <body>
      <header style={{backgroundColor:'gray'}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <h1>
            <a href="/" style={{textDecoration:'none',color:'white'}}>Navbar</a>
          </h1>
          <nav style={{display:'flex',gap:'20px'}}>
            <Link href="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link href="/about" style={{textDecoration:'none',color:'white'}}>About</Link>
            <Link href="/contact" style={{textDecoration:'none',color:'white'}}>Contact</Link>
            <Link href="/dashboard" style={{textDecoration:'none',color:'white'}}>Dashboard</Link>
            <Link href="/blog" style={{textDecoration:'none',color:'white'}}>Blog</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer style={{backgroundColor:'gray'}}>Footer</footer>
    </body>
    </html>
  )
}