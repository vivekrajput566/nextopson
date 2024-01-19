// import HomeClient from '@/components/HomeComponents/HomeClient'
// import NavbarClient from '@/components/Navbar/NavbarClient'
// import SearchSection from '@/components/Navbar/SearchSection'
// import Image from 'next/image'

// async function  getData() {
//   console.log("hii");
  
//   try {
//     console.log("insdie try");
//     const res = await fetch('http://localhost:3000/api/backend/showProperties')
//     const data1=res.json()
//     console.log("data from fetch",data1);
//     // return JSON.parse(JSON.stringify(data1))
//     return data1
    
//   } catch (error) {
//     console.log("insdie catch");
//     console.log("errrr",error);
    
//   }
// }

// export default async function Home() {

//   const data = await getData()
//   console.log("data from function",data);
  
  
//   return (
//    <div>
    
    
//     <HomeClient/>
//    </div>
//   )
// }

import HomeClient from '@/components/HomeComponents/HomeClient'
import NavbarClient from '@/components/Navbar/NavbarClient'
import SearchSection from '@/components/Navbar/SearchSection'
import Image from 'next/image'

async function getData() {
  console.log("hi");

  try {
    console.log("inside try");
    const res = await fetch('http://localhost:3000/api/backend/showProperties',
    { method: "POST", cache: "no-cache" }
    );
    
    if (!res.ok) {
      console.error("Failed to fetch data:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    // console.log("data from fetch", data);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getData();
  console.log("data from function---------->", data);

  return (
    <div>
      <HomeClient />
    </div>
  );
}
