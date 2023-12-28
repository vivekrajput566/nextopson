'use client'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children}) {

 

  return(

    <>
    
        <SessionProvider>
         {children}
         </SessionProvider>

    

    </>
 
    
  )

}
