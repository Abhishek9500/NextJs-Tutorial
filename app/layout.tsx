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
            <a href="/" style={{textDecoration:'none',color:'white'}}>Home</a>
            <a href="/about" style={{textDecoration:'none',color:'white'}}>About</a>
            <a href="/contact" style={{textDecoration:'none',color:'white'}}>Contact</a>
            <a href="/dashboard" style={{textDecoration:'none',color:'white'}}>Dashboard</a>
          </nav>
        </div>
      </header>
      {children}
      <footer style={{backgroundColor:'gray'}}>Footer</footer>
    </body>
    </html>
  )
}