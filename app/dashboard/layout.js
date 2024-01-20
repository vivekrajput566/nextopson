
import { Inter } from 'next/font/google'

import Sidebar from './sidebar'
import DashboardHeader from './dashboard-header/page'

import { NextAuthProvider } from './nextAuthProvider/nextAuthProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextProperty',
  description: 'Best place to find your next property',
}

export default function RootLayout({ children}) {

  

  return(

    <>
    
    <html>
      
      <body suppressHydrationWarning={false}>

      <div className='dashboard flex h-screen justify-center overflow-y-scroll '> 
        <div className='sidebar-menu-dashboard hidden lg:w-1/4 lg:block'>

          <Sidebar />

        </div>

        <div className='no-scrollbar dashboard-content w-full flex-col items-center justify-center overflow-y-scroll pb-10'>
        <div className='w-full mb-10'><DashboardHeader />
        </div>
        

          {children}

  
         

        </div>

      </div>
       
        </body>
     
    </html>
    

    </>
 
    
  )

}
