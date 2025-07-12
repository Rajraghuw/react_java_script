const { default: axios } = require("axios");
import React,{useEffect, useState} from "react";

const Api =() =>{
let[apidata,SetApidata]=useState([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>SetApidata(res.data)
    )
},[])

return(
<>
<h1>this is api</h1>
</>
)
}
export default Api


//google serch jsonplaceholder wha se api leke aana h 

//axios.get ye promise hendle karta hai 

//promises ko hendle karne ke liye ham .then .catch ka use karte hai 

// res ak object hai jiske andr data hai 