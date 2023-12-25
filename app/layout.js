import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/page'
import Footer from './components/footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextProperty',
  description: 'Best place to find your next property',
}

export default function RootLayout({ children}) {

 

  return(

    <>
    
    <html lang="en">
      
      <body>
       <Header/> 
      
        {children}
      
        <Footer/>
        </body>
     
    </html>
    

    </>
 
    
  )

}
