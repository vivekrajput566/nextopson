import { Inter } from 'next/font/google'

import Sidebar from './sidebar'
import DashboardHeader from './dashboard-header/page'



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

      <div className='dashboard flex h-screen overflow-y-scroll '> 
        <div className='sidebar-menu-dashboard w-1/4'>

          <Sidebar />

        </div>

        <div className='no-scrollbar dashboard-content w-full flex-col items-center justify-center overflow-y-scroll  p-10 pl-0 pr-0 pt-0 pb-10'>
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
