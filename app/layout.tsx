import { ReactNode } from "react";

export default function RootLayout({children}:{children:ReactNode}){
  return(
    <html lang="en">
      <body>
        <header>Navbar</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}