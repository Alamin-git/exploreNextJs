import { Metadata } from "next";
import Link from "next/link";


const BlogsPage = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();

   return (
      <div className="container mx-auto mt-10">
         {data.map(({ id, userId, title, body }) => (
            <div key={id} className="border border-black p-3 my-5">
               <h2 className="text-2xl">
                  {id}. {title}
               </h2>
               <p>{body}</p>
               <Link
                  className="underline text-blue-600 visited:text-purple-600"
                  href={`/blogs/${id}`}
               >
                  details
               </Link>
            </div>
         ))}
      </div>
   );
};

export default BlogsPage;
