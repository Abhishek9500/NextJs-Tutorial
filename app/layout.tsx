import { Metadata } from "next";

export const metadata:Metadata = {
  title:{
    default:"Abhishek Decodes",
    template:"%s | Abhishek Decodes"
  },
  description:"learn web  Development,programming, and tech with Abhishek Decodes",
  openGraph:{
    siteName:"Abhishek Decodes",
  }
}

export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}