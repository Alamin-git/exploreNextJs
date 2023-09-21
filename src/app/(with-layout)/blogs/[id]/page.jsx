import loadSingleBlogs from "@/utils/loadSingleBlog";

export const generateMetadata = async ({ params }) => {
   const { title } = await loadSingleBlogs(params.id);
   return {
      title: title,
   };
};

const SingleBlog = async ({ params }) => {
   const { id, title, body } = await loadSingleBlogs(params.id);

   return (
      <div className="container mx-auto">
         <div className="border border-black p-3 my-5">
            <h2 className="text-2xl">
               {id}. {title}
            </h2>
            <p>{body}</p>
         </div>
      </div>
   );
};

export default SingleBlog;
