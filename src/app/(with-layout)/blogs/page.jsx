import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";

const BlogsPage = async () => {
   const blogsData = await loadBlogsData();

   return (
      <div className="container mx-auto mt-10">
         {blogsData.map(({ id, userId, title, body }) => (
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
