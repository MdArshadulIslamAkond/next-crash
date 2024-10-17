import Comments from "@/app/component/Comments";
import getAllPosts from "@/lib/getAllPosts";
import GetPostsComments from "@/lib/getPostComment";
import GetPosts from "@/lib/getPosts";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await GetPosts(id);
  return {
    title: post.title,
    description: post.description,
  };
}
export const generateStaticParams = async () =>{
const posts = await getAllPosts();
return posts.map((post) =>({
    id: post.id.toString(),
}));
}
const PostPage = async ({ params }) => {
  const { id } = params;
  const postPromise = GetPosts(id);
  const commentsPromise = GetPostsComments(id);
  const post = await postPromise;
//   const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  //   console.log(comments);
  return (
    <div className="my-6 space-y-3">
      <h1 className="text-2xl text-green-500">{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Suspense fallback = "<h1>Loading comments....</h1>">
        <Comments Promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default PostPage;
