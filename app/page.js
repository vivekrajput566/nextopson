import Image from 'next/image'
import SearchBox from './components/searchbox/page'
import States from './components/states/page'
import HomeBody from './components/home-body/page'
import RootLayout from './layout'


export default function Home() {
  return (
    <>
    
        <SearchBox />
       <States />
       <HomeBody />

 
    
    </>
  )
}
