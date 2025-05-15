import getPost from "@/lib/getpost";
import React, { Suspense } from "react";
import Posts from "../page";
import getPostComments from "@/lib/getPostComment";
import Comments from "@/app/components/Comments";

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
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr></hr>
      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
      
    </div>
  );
};

export default PostPage;
