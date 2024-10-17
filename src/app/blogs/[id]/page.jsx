import { notFound } from "next/navigation";

const Blog = ({params}) => {
 const {id} = params;
 if(id === '3'){
  notFound();
 }
  return (
    <main className="mt-10">
      <p>The Blog id: {id}</p>
    </main>
  );
};

export default Blog;
