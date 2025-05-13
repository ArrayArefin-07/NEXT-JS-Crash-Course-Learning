import getAllPosts from '@/lib/getAllPosts'
import React from 'react'

const Posts = async () => {

  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div className='mt-6'>
      <h1>All Posts</h1>
      <ul className='mt-6'>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
