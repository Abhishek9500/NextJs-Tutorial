import { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
  return(
    <html lang="en">
    <head>
      <title>Abhishek Next.Js Course</title>
    </head>
    <body>
      <header>Navbar</header>
      {children}
      <footer>Footer</footer>
    </body>
    </html>
  )
}