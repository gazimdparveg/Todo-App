import React  from 'react'

const Show = ({name,email,phone, Delete})=> {
 

  return (
    <div>
          
           
          <tbody className='w-full bg-slate-400 flex-col flex text-center flex-1'>
            <tr className='w-full h-10 flex   border-opacity-20 border-b-2 border-red-500 '>
              <td className='w-1/4 p-2 border-r-2 border-yellow-600 '>{name} </td>
              <td className='w-1/4  p-2 border-r-2 border-yellow-600 '>{email} </td>
              <td className='w-1/4  p-2 border-r-2 border-yellow-600 '>{phone} </td>
              <td className='w-1/4  p-2   '> <span > Edit</span> || <span className=' cursor-pointer' onClick={Delete}> Delete</span> </td>
            </tr>
            
            </tbody> 
 
            


         
    </div>
  )
}

export default Show
