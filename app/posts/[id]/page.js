import getPost from "@/lib/getpost";
import React from "react";
import Posts from "../page";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
    </div>
  );
};

export default PostPage;
