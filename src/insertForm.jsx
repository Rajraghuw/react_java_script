import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const InsertForm = () => {

    let [frmdata,setFrmdata] = useState({username:"",userage:"",userlocation:""})

    let Navigator = useNavigate()

    function handleinput(e){
       const {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function finalsubmit(e){
      e.preventDefault()
        console.log(frmdata);
        axios.post('http://localhost:3000/userdata',frmdata)
        .then(r=>alert("data inserted..!!"))
        Navigator('/showdata')
      }

  return (
    <>
    <h1>Insert Data</h1>
    <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">User Name</label>
        <input type="text" name="username" onChange={handleinput} /> <br /> <br />

        <label htmlFor="">User Age</label>
        <input type="text" name="userage" onChange={handleinput} /> <br /> <br />

        <label htmlFor="">User Location</label>
        <input type="text" name="userlocation" onChange={handleinput} /> <br /> <br />

        <input type="submit" />
    </form>
    </>
  )
}

export default InsertForm



// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const InsertForm = () => {
// let[frmdata,setfrmdata] = useState({username:"",contect:"",email:""})

// let Navigator = useNavigate()

// function hendleinput(e){
//   const {name,value}=e.target
//   setfrmdata({...frmdata,[name]:value})
// }
// function finalsubmit(e){
//        e.preventDefault()
//        console.log(frmdata)
//        axios.post('http://localhost:3000/data')
//        .then(r=>alert("data inserted....!!!!"))
//        Navigator('/showdata')
// }
//     return(
//         <>
//           <h1>Insert form</h1>

//         <form action="" onSubmit={finalsubmit}>
//             <label htmlFor="">name</label>
//             <input type="text" name="username" onChange={hendleinput}/><br /><br />
//              <label htmlFor="">contect</label>
//             <input type="text" name="contect" onChange={hendleinput}/><br /><br />
//              <label htmlFor="">email</label>
//             <input type="text" name="email" onChange={hendleinput}/><br /><br />

//             <input type="submit"/>
//         </form>
        
//         </>
//     )
// }

// export default InsertForm