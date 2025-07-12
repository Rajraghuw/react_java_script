import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Showdata = () => {
    let [apidata,setapidata] = useState([])
    let [showfrm,setshowfrm] = useState(false)
    let [editfrmdata,setedit] = useState([])
    
    function mydel(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(r=>alert("deleted"))
    }

    function handleedit (e){
      let {name,value} = e.target
      setedit({...editfrmdata,[name]:value})
    }

    function finaledit(e){
      e.preventDefault();
      axios.put(`http://localhost:3000/userdata/${editfrmdata.id}`, editfrmdata)
      .then(()=>alert("Updated...."))
    }

    useEffect(()=>{
      axios.get('http://localhost:3000/userdata')
      .then((r)=>{setapidata(r.data)
    })
  },[mydel])

  return (
    <>
    <h1>User Data</h1>
    <table border="">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
      {
        apidata.map((e)=>(
          <tr>
            <td> {e.id} </td>
            <td> {e.username} </td>
            <td> {e.userage} </td>
            <td> {e.userlocation} </td>
            <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
            <td><button onClick={()=>(setshowfrm(true),setedit(e))}>Edit</button></td>
          </tr>
        ))
      }

    </table>

    {showfrm && (

        <form action="" onSubmit={finaledit}>

        <label htmlFor="">id </label>
        <input type="text" value={editfrmdata.id} name='id' onChange={handleedit} readOnly/> <br /> <br />

        
        <label htmlFor="">Name </label>
        <input type="text" value={editfrmdata.username} name='username' onChange={handleedit}/> <br /> <br />

        
        <label htmlFor="">Age </label>
        <input type="text" value={editfrmdata.userage} name='userage' onChange={handleedit}/> <br /> <br />

        
        <label htmlFor="">Location </label>
        <input type="text"  value={editfrmdata.userlocation} name='userlocation' onChange={handleedit}/> <br /> <br />

        <input type="submit" />

        </form>

    )}
    </>
  
  )
}

export default Showdata





// import axios from "axios";
// import { useEffect, useState } from "react";
// // import { Form } from "react-router-dom";

// const showdata = () =>{

//     let [apidata,SetApidata]=useState([])
//     let [showFrm,setshowfrm]=useState(false)
//     let [editfrmdata,setedit]=useState([])

//      function handleedit(e){
//        const{name,value}=e.target
//        setedit({...editfrmdata,[name]:value})
        
//      }

//     function finaledit(e){
//         e.preventDefault();
//         axios.put('http://localhost:3000/data/$')
//     }
//     useEffect(()=>{
//         axios.get('http://localhost:3000/data')
//         .then((r)=>{SetApidata(r.data)})
//     },[mydel])


//     return(
//         <>
//         <h1>User data</h1>
//         <table>
//             <tr>
//                 <th>name</th>
//                 <th>contect</th>
//                 <th>email</th>
//                 <th>edit</th>
                
//             </tr>
//              {
//                 apidata.map((e)=>(
//                     <tr>
//                         <td>{e.username}</td>
//                         <td>{e.contect}</td>
//                         <td>{e.email}</td>
//                     </tr>
//                 ))
//              }
//         </table>
// {
//     showFrm && (
//     <form onSubmit={finaledit}>

//         <label htmlFor="">name</label>
//         <input type="text" name="name" onChange={handleedit}/> <br /><br/>

//          <label htmlFor="">contact</label>
//         <input type="text" name="contect" onChange={handleedit}/> <br /><br/>

//          <label htmlFor="">email</label>
//         <input type="text" name="email" onChange={handleedit}/> <br /><br/>

//         <input type="Submit"/>
//     </form>)
// }
//         </>
//     )


// }
// export default showdata