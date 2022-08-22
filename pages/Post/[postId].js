import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          postId: '5',
        },
      },
      {
        params: {
          postId: '10',
        },
      },
    ],
    fallback:false
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const jsonPost = await post.json();
  console.log(jsonPost);
  return {
    props: {
      post: jsonPost || null,
    },
  };
};

export default function PostDetails({ post }) {
  return (
    <>
      <Layout title={"PostDetails"}>
       <h1>{post.title}</h1>
       <h2>{post.body}</h2>
      </Layout>
    </>
  );
}
