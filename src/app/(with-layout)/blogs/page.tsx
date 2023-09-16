import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Blogs | Next App",
   description: "Exploring Next App",
};

const blogs = [
   {
      id: 1,
      year: 2022,
      title: "Blogs 1",
      pera: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias itaque soluta deserunt modi iste assumenda doloribus vero corporis excepturi!",
   },

   {
      id: 2,
      year: 2022,
      title: "Blogs 2",
      pera: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias itaque soluta deserunt modi iste assumenda doloribus vero corporis excepturi!",
   },
   {
      id: 3,
      year: 2022,
      title: "Blogs 3",
      pera: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias itaque soluta deserunt modi iste assumenda doloribus vero corporis excepturi!",
   },
   {
      id: 4,
      year: 2022,
      title: "Blogs 4",
      pera: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias itaque soluta deserunt modi iste assumenda doloribus vero corporis excepturi!",
   },
];

const BlogsPage = () => {
   return (
      <div className="container mx-auto mt-10">
         {blogs.map(({ id, year, title }) => (
            <Link
               className="block border border-black p-3 my-5"
               href={`/blogs/${year}/${id}`}
               key={id}
            >
               {title}
            </Link>
         ))}
      </div>
   );
};

export default BlogsPage;
