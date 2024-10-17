import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      discription: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      discription: "Blog 2 description",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {
          blogs.map((blog) => (
            <li key={blog.id} className="mb-5">
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              {/* <p>{blog.discription}</p> */}
            </li>
          ))
        }
      </ul>
    </main>
  );
};

export default Blogs;
