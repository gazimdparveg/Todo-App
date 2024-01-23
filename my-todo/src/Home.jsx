import React, {    useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';  
import Table from './Table';


function Home() {

  const [names , setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nid, setid] = useState("");
  
  const [refrish , setrea] = useState(false);
 
 
 
   

  const usename = (e)=>{
    setName(e.target.value);
  }
  const useemail = (e)=>{
    setEmail(e.target.value);
  }
  const usenumber = (e)=>{
    setNumber(e.target.value);
  }

  const save =  async ()=>{
    

    if(names === ""){
    toast.error("Name Is Require !");
    }else if(email === ""){
      toast.error("Email Id Is Require !");
    }else if(number === ""){
      toast.error("Phone Number Is Require !");
    }else{

      let date = await axios.post('http://localhost:8000/post',{
        names:names,
        email:email,
        number:number,
      }); 
      if(date){
        setrea(!refrish);
        console.log(date);
        toast.success("Post Is Save");
        setName("");
        setEmail('');
        setNumber('');
      }
     
    }
    
  };
 const Update = async (nid)=>{
  

    if(names === ""){
    toast.error("Name Is Require !");
    }else if(email === ""){
      toast.error("Email Id Is Require !");
    }else if(number === ""){
      toast.error("Phone Number Is Require !");
    }else{

      let date = await axios.put('http://localhost:8000/update/'+nid,{
        names:names,
        email:email,
        number:number,
      }); 
      if(date){
        setrea(!refrish);
        console.log(date);
        toast.success("Post Is Update");
        setName("");
        setEmail('');
        setNumber('');
        setid("");
      }
     
    }
    
  };
  return (
   
     
      <div className='w-full flex-1 flex flex-col   h-auto  bg-gray-600'>
      
        <div className='p-6  w-1/2 mt-10 mb-10 flex-1  flex-col  flex    m-auto bg-cyan-700 rounded-3xl'>
        <h2 className=' w-full h-auto flex-1 flex-col  flex  pb-6   text-center text-white '>My ToDo App</h2>

          <form method='' className='w-full flex flex-1 flex-col  overflow-hidden' action="">

            
           <label className='text-white mr-2' htmlFor="name">Name: </label>
            <input onChange={usename} value={names}   className=' w-full  pl-2 flex-col  h-10    border-red-400 rounded-md flex' type="text" id='name' placeholder='Enter Your Name' />
           
          

            <label className='text-white mr-2' htmlFor="email">Email: </label>
            <input  onChange={useemail} value={email} className=' w-full pl-2  flex-col  h-10   border-red-400 rounded-md flex' type="email" id='email' placeholder='Enter Your email' />

            <label className='text-white mr-2' htmlFor="phone">Phone: </label>
            <input onChange={usenumber} value={number} className=' w-full pl-2 h-10  flex-col   border-red-400 rounded-md flex' type="text" id='phone' placeholder='Enter Your phone' />
 
            <button type="button" onClick={nid? ()=> Update(nid) : ()=> save()} className="m-5 h-10 w-20 font-semibold rounded-full  bg-gray-100 dark:text-gray-800">{nid? "Update" :"Save"}</button>

          </form>

          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
 
 





        </div>

       
        <Table {...{refrish , setrea, setEmail,setNumber , setName,setid}} />

        
      </div>

      
   
  )
}

export default Home
