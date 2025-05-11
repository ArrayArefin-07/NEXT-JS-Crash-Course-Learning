import React from 'react'

const BlogPage = ({params}) => {
  const {id} = params;
  return (
    <div>
      <div className='mt-6'>The Blog id is : {id}</div>
    </div>
  )
}

export default BlogPage
