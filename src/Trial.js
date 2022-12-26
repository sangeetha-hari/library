import React, { useState, useEffect } from "react";

export default function Trial(){

    const [booklist,setbooklist]=useState([]);

    const getbooks=()=>{
        fetch(`https://apimocha.com/librarybook/booklist`,{
            method: "GET"
        }).then((data)=>data.json())
        .then((res)=>{
            console.log(res);
            setbooklist(res);
        })
    }
    
    useEffect(()=>{getbooks()},[])

   
    return (
        <div>
            {booklist.map((book,index)=><p>{book.bookname}</p> )}

            This is trial
           
        </div>
    )
}