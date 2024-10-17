import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const Posts = await getAllPosts();
  // console.log(Posts);
  return (
    <div className="mt-6">
      <h1>All posts</h1>
      <ul className="mt-6">
        {Posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
