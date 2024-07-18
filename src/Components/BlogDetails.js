
import React from 'react'

function BlogDetails({post}) {
  return (
    <div className='w-1/2 bg-white mt-5 px-3 py-3  rounded-md hover:bg-red-50 active:bg-red-50 focus:outline-none focus:ring focus:ring-red-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200s'shadow-xl>
    <h3 className='text-amber-950 font-bold' >{post.title}</h3>
    <p className='text-sm'> By <span className='underline'>{post.author}</span>  on  {post.category}</p>
    <p className='text-sm italic' >posted on {post.date}</p>
    <p className='mt-3 mb-3'>{post.content}</p>
    {
        post.tags.map((tag)=>(
            <span className='text-blue-700 font-[600] text-sm underline mr-2'>{`#${tag}`}</span>
        ))
    }
    </div>
  )
}

export default BlogDetails