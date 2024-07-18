import React ,{useContext} from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const {handleChangePage ,page , totalPages} = useContext(AppContext);

  return (
    <div className='w-full  flex justify-around h-[40px] bg-white bottom-0 fixed border-t-2  border-gray-40000'>
      <div className='flex items-center '>
        {
          page > 1 &&(
            <button className='bg-blue-500 mr-5 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md ' onClick={()=>handleChangePage(page-1)}>previous</button>
          )
        }
        {
          page<totalPages &&(
            <button className='bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md'onClick={()=>handleChangePage(page +1) } >next</button>
          )
        }
      
        
        
      </div>
      <div>
      <button className='bg-blue-500 ml-5 mt-1 fixed hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md' > page {page} of {totalPages} </button>
      </div>
    </div>
  )
}

export default Pagination