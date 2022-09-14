import React, { useEffect, useState } from 'react';
import './Admin.css'

import { collection, getDocs } from 'firebase/firestore';
import {db} from '../components/config/firebase'
import { TextField } from '@mui/material';



 

//function starts here
const Admin = () => {
  const [bookingRoom, setBookingRoom] = useState([])


    const hotelRef = collection(db, 'bookingRoom')

    

    const getBookingRoom = async () =>{
          const data =  await getDocs(hotelRef)
         
         
          console.log( data.docs.map((results)=>(results.data())))
          setBookingRoom( data.docs.map((results)=>({...results.data(), id:results.id})))
          
    }

    useEffect(()=>{

      getBookingRoom()
      
           
    },[])
     
  

    return (
        <div className='admin'>
          <div className='test'>
          <br></br>
          <br></br>
          <br></br>
          <textarea placeholder='enter here'></textarea>
          <TextField>jjhfggfd</TextField>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>
          <h1>1111111111111111111111111111111111</h1><br></br>

          </div>
          
        </div>
        // <>
        
        // </>
        
    );
}

export default Admin;
