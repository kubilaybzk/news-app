import React from 'react'

import Layout from "../../components/Layout/Layout";

export const getStaticProps=async()=>{
  const post=await fetch('https://jsonplaceholder.typicode.com/posts/5');
  const jsonPost=await post.json();
  return{
    props:{
      post:jsonPost || null
    }
  }
}

const Post=({post})=> {
  return(
    <div>
      <h1>Name</h1>
      <h2>title:{post.title}</h2>
      <h2>body:{post.body}</h2>
      <h2>userId:{post.userId}</h2>
      <h2>id:{post.id}</h2>

    </div>
  )
}

export default Post;