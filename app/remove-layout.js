'use client'
import React from 'react'
import { usePathname } from 'next/navigation';


export function RemoveLayout() {


    const currentPage = usePathname();
    
const parts = currentPage.split('/');
//console.log(currentPage)
//const parentPath = parts.slice(0, -1).join('/');
const pathsArray = ["dashboard"];
console.log(parts)

if(pathsArray.includes(parts[1])) {

  return true;
}
else{
  return false;
}

  }



