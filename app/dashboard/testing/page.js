"use client"
import { useState } from "react"

export default function Testing() {
        
    const [file,setFile]=useState();
   const  onSubmit = async (e) => {

        e.preventDefault();
        console.log (file);
        const data= new FormData();
        data.set( 'file', file);
        const result =await fetch('/api/backend/listNewProperty/saveListing', {
            method: 'POST',
            body: data,
          })

    }
        return (
        <main>
        <h1>Upload Image</h1>
        <form onSubmit={onSubmit}>
        <input
        type="file"
        name="file"
        multiple
        onChange={(e)=>setFile(e.target.files?. [0])}
        />
        <button type="submit">Upload Image</button>
        </form>
        </main>
        )
}