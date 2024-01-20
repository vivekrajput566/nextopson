

import HomeClient from '@/components/HomeComponents/HomeClient'
import NavbarClient from '@/components/Navbar/NavbarClient'
import SearchSection from '@/components/Navbar/SearchSection'
import Image from 'next/image'
// import { getServerSession } from 'next-auth'
// import { AuthOptions } from './api/authOptions'

// async function getData() {
//   // console.log("hi");

//   try {
//     // console.log("inside try");
//     const res = await fetch('http://localhost:3000/api/backend/showProperties',
//     { method: "POST", cache: "no-cache" }
//     );
    
//     if (!res.ok) {
//       console.error("Failed to fetch data:", res.status, res.statusText);
//       return null;
//     }

//     const data = await res.json();
//     // console.log("data from fetch", data);
//     return data;
//   } catch (error) {
//     console.error("Error during fetch:", error);
//     return null;
//   }
// }

export default async function Home() {
  // const userInfo=getServerSession(AuthOptions)
  // const data = await getData();
  // console.log("data from function---------->", data);

  return (
    <div>
      <HomeClient />
    </div>
  );
}
