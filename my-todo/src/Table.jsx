import React, { useEffect, useState } from 'react'
import Show from './Show';
import axios from 'axios';  
import {  toast } from 'react-toastify';

function Table({refrish , setrea, setEmail,setNumber , setName ,setid}) {

  
  const [post , setpost] = useState();  
  

  useEffect(() => {
    axios.get('http://localhost:8000/post')
      .then((res)=> setpost(res.data));
   
    }, [refrish]);
 
 



    
      
  
  const deletes = async (id)=>{
    let date = await axios.delete('http://localhost:8000/delete/'+id); 
    if(date){
      setrea(!refrish); 
      console.log(date);
      toast.success("Post Is Delete");
      
    }
   
  }

 

  const edittodos =  (id,name,email,number)=>{ 
    
   setEmail(email)
   setName(name)
   setNumber(number)
   setid(id);
 
    
      
  } 
 


  return (
    <div>
       <div className='w-11/12 flex-1 flex m-auto h-auto'>
        <table className='w-full h-auto mb-10 flex-col flex flex-1'>
          <thead className='w-full bg-orange-400 text-white flex flex-1 '>
          <tr className='w-full flex flex-1 '>
            <th  className='w-1/4   '>Name</th>
            <th className='w-1/4   '>Emai</th>
            <th className='w-1/4  '>Phone</th>
            <th className='w-1/4  '>Action</th>
          </tr>
          </thead>
        

{  
        post?.map((date)=>{
         
          return   <Show key={date._id}    name={date.name} email={date.email} phone={date.number} Delete={()=>deletes(date._id)}  edittodo={()=>edittodos(date._id,date.name,date.email,date.number)}  />
        }) 
      }
         
        </table>


   
      </div>
    </div>
  )
}

export default Table
