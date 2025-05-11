import { notFound } from 'next/navigation';
import React from 'react'

const BlogPage = ({params}) => {
  const {id} = params;

  if(id === '3'){
    notFound();
  }

  return (
    <div>
      <div className='mt-6'>The Blog id is : {id}</div> 
    </div>
  )
}

export default BlogPage
