import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import BlogDetails from './BlogDetails';

function Body() {
  const {loding,page,posts} = useContext(AppContext);

  return (
    <div className='w-screen h-full bg-white gap-3  flex flex-col items-center'>
      <div  className='w-10/12 h-full shadow-inner border rounded-md bg-indigo-100 gap-3  flex flex-col items-center'>
      {
        loding ?(
          <div className="w-screen flex h-screen justify-center items-center">
            <div class="spinner"></div>
          </div>
        ):(
          posts.map((post)=>(
            <BlogDetails key = {posts.id} post={post} />
          ))
        )
        }
      </div>
    </div>
  )
}

export default Body