'use client'

import { SessionProvider } from 'next-auth/react'



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout(children) {

 

  return(

    <>
    
        <SessionProvider>
         {children}
         </SessionProvider>

    

    </>
 
    
  )

}
